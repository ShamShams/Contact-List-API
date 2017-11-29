import React, { Component } from 'react';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

// Components
import Form from './Form';
import List from './List';

// CSS
import '../stylesheets/App.css';

class App extends Component {
  state = {
      contacts: [],
      contactList: []
  }

  componentDidMount() {
    let contactsUrl = 'http://localhost:3012/listeContact';

    fetch(contactsUrl)
      .then(res => res.json())
      .then(result => {
        this.setState({ contacts: result, contactList: result })
        console.log(this.state.contacts);
      })
      .catch((res, err) => res.send(err));
  }

  handleChange = (e) => {
    e.target.value === '' ?
      this.setState({ contactList: this.state.contacts })
      :
      this.setState({ contactList: this.state.contacts.filter(contact =>       contact.prenom.includes(e.target.value)
        || contact.nom.includes(e.target.value)
      )})
  }

  render() {
    return (
      <MuiThemeProvider className="App">
        <Form />
        <TextField
          hintText="Rechercher un contact"
          style={{ marginLeft: 20, marginTop: 20 }}
          onChange={this.handleChange}/>
        <List contacts={this.state.contactList}/>
      </MuiThemeProvider>
    );
  }
}

export default App;

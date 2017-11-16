import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  nom: { type: String, required: false },
  prenom: { type: String, required: false },
  titre: { type: String, required: false },
  entreprise: { type: String, required: false },
  email: { type: String, required: false },
  adresse: { type: String, required: false },
  telephone: {
    mobile: { type: Number, required: false },
    work: { type: Number, required: false }
  }
}, { versionKey: false });

export default mongoose.model('Contact', contactSchema);

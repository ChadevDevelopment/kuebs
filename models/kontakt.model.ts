import mongoose, { Schema, Document, model, models } from 'mongoose';

interface IKontakt extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const KontaktSchema: Schema<IKontakt> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Kontakt = models.Kontakt || model<IKontakt>('Kontakt', KontaktSchema);

export default Kontakt;
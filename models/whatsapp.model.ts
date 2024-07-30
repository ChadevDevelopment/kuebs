import mongoose, { Schema, Document, model, models } from 'mongoose';

interface IWhatsappSchema extends Document {
  name: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const WhatsappSchema: Schema<IWhatsappSchema> = new Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Whatsapp = models.Whatsapp || model<IWhatsappSchema>('Whatsapp', WhatsappSchema);

export default Whatsapp;
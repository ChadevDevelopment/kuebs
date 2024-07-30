import mongoose, { Schema, Document, model, models } from 'mongoose';

interface INewsletter extends Document {
  email: string;
  createdAt: Date;
}

const NewsletterSchema: Schema<INewsletter> = new Schema({
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Newsletter = models.Newsletter || model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
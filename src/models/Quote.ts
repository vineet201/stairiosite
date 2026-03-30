import mongoose, { Schema, Document, Model } from 'mongoose';
import { quoteStatuses, type QuoteStatus } from '@/types/quotes';

export interface IQuote extends Document {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
  status: QuoteStatus;
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema = new Schema<IQuote>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    serviceType: {
      type: String,
      required: [true, 'Service type is required'],
    },
    budgetRange: {
      type: String,
      required: [true, 'Budget range is required'],
    },
    timeline: {
      type: String,
      required: [true, 'Timeline is required'],
    },
    projectDescription: {
      type: String,
      required: [true, 'Project description is required'],
    },
    status: {
      type: String,
      enum: quoteStatuses,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

const Quote: Model<IQuote> = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

export default Quote;

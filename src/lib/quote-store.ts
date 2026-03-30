import 'server-only';

import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import type { AdminQuoteRecord, QuoteStatus } from '@/types/quotes';

export interface QuoteSubmissionInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
}

interface QuoteSource {
  _id: { toString(): string };
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

function serializeQuote(quote: QuoteSource): AdminQuoteRecord {
  return {
    id: quote._id.toString(),
    name: quote.name,
    email: quote.email,
    company: quote.company ?? '',
    phone: quote.phone ?? '',
    serviceType: quote.serviceType,
    budgetRange: quote.budgetRange,
    timeline: quote.timeline,
    projectDescription: quote.projectDescription,
    status: quote.status,
    storageSource: 'mongodb',
    createdAt: new Date(quote.createdAt).toISOString(),
    updatedAt: new Date(quote.updatedAt).toISOString(),
  };
}

export async function createQuoteSubmission(input: QuoteSubmissionInput) {
  await connectDB();

  const quote = await Quote.create({
    ...input,
    company: input.company?.trim(),
    phone: input.phone?.trim(),
  });

  return {
    quote: serializeQuote(quote.toObject() as QuoteSource),
    storage: 'mongodb' as const,
  };
}

export async function listQuoteSubmissions() {
  await connectDB();
  const quotes = await Quote.find().sort({ createdAt: -1 });

  return quotes.map((quote) => serializeQuote(quote.toObject() as QuoteSource));
}

export async function updateQuoteSubmissionStatus(id: string, status: QuoteStatus) {
  if (!mongoose.isValidObjectId(id)) {
    return null;
  }

  await connectDB();
  const quote = await Quote.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });

  if (!quote) {
    return null;
  }

  return serializeQuote(quote.toObject() as QuoteSource);
}

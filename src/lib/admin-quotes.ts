import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import type { AdminQuoteRecord, QuoteStatus } from '@/types/quotes';

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
    createdAt: new Date(quote.createdAt).toISOString(),
    updatedAt: new Date(quote.updatedAt).toISOString(),
  };
}

export async function listAdminQuotes() {
  await connectDB();
  const quotes = await Quote.find().sort({ createdAt: -1 });

  return quotes.map((quote) => serializeQuote(quote.toObject() as QuoteSource));
}

export async function updateAdminQuoteStatus(id: string, status: QuoteStatus) {
  await connectDB();
  const quote = await Quote.findByIdAndUpdate(id, { status }, { new: true, runValidators: true });

  if (!quote) {
    return null;
  }

  return serializeQuote(quote.toObject() as QuoteSource);
}

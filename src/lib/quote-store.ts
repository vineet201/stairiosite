import 'server-only';

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb';
import Quote from '@/models/Quote';
import type { AdminQuoteRecord, QuoteStatus } from '@/types/quotes';

const FALLBACK_QUOTES_PATH = path.join(process.cwd(), 'data', 'quotes-fallback.json');

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
    createdAt: new Date(quote.createdAt).toISOString(),
    updatedAt: new Date(quote.updatedAt).toISOString(),
  };
}

function sortQuotesByNewest(quotes: AdminQuoteRecord[]) {
  return [...quotes].sort(
    (left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
  );
}

async function ensureFallbackDirectory() {
  await mkdir(path.dirname(FALLBACK_QUOTES_PATH), { recursive: true });
}

async function readFallbackQuotes() {
  try {
    const contents = await readFile(FALLBACK_QUOTES_PATH, 'utf8');
    const parsed = JSON.parse(contents) as AdminQuoteRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

async function writeFallbackQuotes(quotes: AdminQuoteRecord[]) {
  await ensureFallbackDirectory();
  await writeFile(FALLBACK_QUOTES_PATH, JSON.stringify(quotes, null, 2), 'utf8');
}

async function createFallbackQuote(input: QuoteSubmissionInput) {
  const now = new Date().toISOString();
  const quote: AdminQuoteRecord = {
    id: `local-${randomUUID()}`,
    name: input.name,
    email: input.email,
    company: input.company?.trim() ?? '',
    phone: input.phone?.trim() ?? '',
    serviceType: input.serviceType,
    budgetRange: input.budgetRange,
    timeline: input.timeline,
    projectDescription: input.projectDescription,
    status: 'pending',
    createdAt: now,
    updatedAt: now,
  };

  const quotes = await readFallbackQuotes();
  quotes.unshift(quote);
  await writeFallbackQuotes(quotes);

  return quote;
}

async function updateFallbackQuoteStatus(id: string, status: QuoteStatus) {
  const quotes = await readFallbackQuotes();
  const quoteIndex = quotes.findIndex((quote) => quote.id === id);

  if (quoteIndex === -1) {
    return null;
  }

  const updatedQuote: AdminQuoteRecord = {
    ...quotes[quoteIndex],
    status,
    updatedAt: new Date().toISOString(),
  };

  quotes[quoteIndex] = updatedQuote;
  await writeFallbackQuotes(quotes);

  return updatedQuote;
}

export async function createQuoteSubmission(input: QuoteSubmissionInput) {
  try {
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
  } catch (error) {
    console.error('Mongo quote create failed, saving locally instead:', error);

    return {
      quote: await createFallbackQuote(input),
      storage: 'local' as const,
    };
  }
}

export async function listQuoteSubmissions() {
  const fallbackQuotes = await readFallbackQuotes();

  try {
    await connectDB();
    const mongoQuotes = await Quote.find().sort({ createdAt: -1 });
    const serializedMongoQuotes = mongoQuotes.map((quote) =>
      serializeQuote(quote.toObject() as QuoteSource)
    );

    return sortQuotesByNewest([...serializedMongoQuotes, ...fallbackQuotes]);
  } catch (error) {
    console.error('Mongo quote list failed, using local storage only:', error);
    return sortQuotesByNewest(fallbackQuotes);
  }
}

export async function updateQuoteSubmissionStatus(id: string, status: QuoteStatus) {
  if (mongoose.isValidObjectId(id)) {
    try {
      await connectDB();
      const quote = await Quote.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
      );

      if (quote) {
        return serializeQuote(quote.toObject() as QuoteSource);
      }
    } catch (error) {
      console.error('Mongo quote status update failed, checking local storage:', error);
    }
  }

  return updateFallbackQuoteStatus(id, status);
}

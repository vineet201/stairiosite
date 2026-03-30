export const quoteStatuses = ['pending', 'contacted', 'completed', 'cancelled'] as const;

export type QuoteStatus = (typeof quoteStatuses)[number];
export type QuoteStorageSource = 'mongodb' | 'local';

export interface AdminQuoteRecord {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
  status: QuoteStatus;
  storageSource: QuoteStorageSource;
  createdAt: string;
  updatedAt: string;
}

import { listQuoteSubmissions, updateQuoteSubmissionStatus } from '@/lib/quote-store';
import type { QuoteStatus } from '@/types/quotes';

export async function listAdminQuotes() {
  return listQuoteSubmissions();
}

export async function updateAdminQuoteStatus(id: string, status: QuoteStatus) {
  return updateQuoteSubmissionStatus(id, status);
}

import type { Metadata } from 'next';
import { QuotesDashboard } from '@/components/admin/quotes-dashboard';
import { listAdminQuotes } from '@/lib/admin-quotes';
import { requireAdminSession } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Quote Admin | Stairio',
  description: 'Manage quote requests submitted through the Stairio website.',
};

export default async function AdminQuotesPage() {
  const session = await requireAdminSession('/admin/login?next=/admin/quotes');
  const quotes = await listAdminQuotes();

  return <QuotesDashboard initialQuotes={quotes} adminUsername={session.username} />;
}

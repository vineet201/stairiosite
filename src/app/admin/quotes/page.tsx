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
  try {
    const quotes = await listAdminQuotes();

    return <QuotesDashboard initialQuotes={quotes} adminUsername={session.username} />;
  } catch (error) {
    console.error('Admin quotes page failed to load:', error);

    return (
      <QuotesDashboard
        initialQuotes={[]}
        adminUsername={session.username}
        initialError="Quote data could not be loaded because MongoDB Atlas is rejecting this machine. Add public IP 47.31.122.148 to Atlas Network Access, then refresh."
      />
    );
  }
}

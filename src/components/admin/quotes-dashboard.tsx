'use client';

import { useDeferredValue, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import {
  BriefcaseBusiness,
  Building2,
  Clock3,
  DollarSign,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Search,
  Sparkles,
} from 'lucide-react';
import { quoteStatuses, type AdminQuoteRecord, type QuoteStatus } from '@/types/quotes';

const statusStyles: Record<QuoteStatus, string> = {
  pending: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
  contacted: 'border-sky-400/30 bg-sky-400/10 text-sky-200',
  completed: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  cancelled: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
};

const statusLabels: Record<QuoteStatus, string> = {
  pending: 'Pending',
  contacted: 'Contacted',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

interface QuotesDashboardProps {
  initialQuotes: AdminQuoteRecord[];
  adminUsername: string;
  initialError?: string;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

function getSummary(quotes: AdminQuoteRecord[]) {
  return {
    total: quotes.length,
    pending: quotes.filter((quote) => quote.status === 'pending').length,
    contacted: quotes.filter((quote) => quote.status === 'contacted').length,
    completed: quotes.filter((quote) => quote.status === 'completed').length,
  };
}

export function QuotesDashboard({
  initialQuotes,
  adminUsername,
  initialError = '',
}: QuotesDashboardProps) {
  const router = useRouter();
  const [quotes, setQuotes] = useState(initialQuotes);
  const [selectedId, setSelectedId] = useState(initialQuotes[0]?.id ?? '');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | QuoteStatus>('all');
  const [error, setError] = useState(initialError);
  const [message, setMessage] = useState('');
  const [updatingId, setUpdatingId] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filteredQuotes = quotes.filter((quote) => {
    const matchesStatus = statusFilter === 'all' ? true : quote.status === statusFilter;
    const matchesSearch =
      deferredSearch.length === 0
        ? true
        : [
            quote.name,
            quote.email,
            quote.company,
            quote.serviceType,
            quote.projectDescription,
          ]
            .join(' ')
            .toLowerCase()
            .includes(deferredSearch);

    return matchesStatus && matchesSearch;
  });

  const activeSelectedId = filteredQuotes.some((quote) => quote.id === selectedId)
    ? selectedId
    : (filteredQuotes[0]?.id ?? '');

  const selectedQuote =
    filteredQuotes.find((quote) => quote.id === activeSelectedId) ??
    quotes.find((quote) => quote.id === activeSelectedId) ??
    null;

  const summary = getSummary(quotes);

  function handleUnauthorized() {
    router.replace('/admin/login');
    router.refresh();
  }

  function refreshQuotes() {
    setError('');
    setMessage('');

    startTransition(() => {
      void (async () => {
        const response = await fetch('/api/admin/quotes', {
          method: 'GET',
          cache: 'no-store',
        });

        if (response.status === 401) {
          handleUnauthorized();
          return;
        }

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Unable to refresh quotes.');
          return;
        }

        setQuotes(data.quotes as AdminQuoteRecord[]);
        setMessage('Quote requests refreshed.');
      })();
    });
  }

  function updateStatus(id: string, status: QuoteStatus) {
    setError('');
    setMessage('');
    setUpdatingId(id);

    startTransition(() => {
      void (async () => {
        const response = await fetch(`/api/admin/quotes/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status }),
        });

        if (response.status === 401) {
          handleUnauthorized();
          return;
        }

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Unable to update the quote status.');
          setUpdatingId('');
          return;
        }

        setQuotes((currentQuotes) =>
          currentQuotes.map((quote) => (quote.id === id ? (data.quote as AdminQuoteRecord) : quote))
        );
        setMessage(`Marked quote as ${statusLabels[status].toLowerCase()}.`);
        setUpdatingId('');
      })();
    });
  }

  function logout() {
    setError('');
    setMessage('');

    startTransition(() => {
      void (async () => {
        await fetch('/api/admin/logout', { method: 'POST' });
        router.replace('/admin/login');
        router.refresh();
      })();
    });
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-[#7DD3FC]/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-[#D8B4FE]/12 blur-[140px]" />
        <div className="absolute bottom-[-5%] left-[28%] h-96 w-96 rounded-full bg-[#FF9132]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-5 py-5 sm:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.24em] text-neutral-300">
                  <Sparkles className="h-3.5 w-3.5 text-[#7DD3FC]" />
                  Quote Inbox
                </div>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Admin Panel</h1>
                <p className="mt-2 text-sm text-neutral-400 sm:text-base">
                  Signed in as <span className="text-neutral-200">{adminUsername}</span>. Review and manage the quote requests coming from the website.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={refreshQuotes}
                  disabled={isPending}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-neutral-200 transition hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <RefreshCw className={`h-4 w-4 ${isPending ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
                <button
                  type="button"
                  onClick={logout}
                  disabled={isPending}
                  className="inline-flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-100 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-b border-white/10 px-5 py-5 sm:grid-cols-2 sm:px-8 xl:grid-cols-4">
            <div className="rounded-3xl border border-white/8 bg-black/30 p-5">
              <p className="text-sm text-neutral-400">Total requests</p>
              <p className="mt-3 text-3xl font-semibold">{summary.total}</p>
            </div>
            <div className="rounded-3xl border border-amber-400/15 bg-amber-400/[0.05] p-5">
              <p className="text-sm text-amber-100/70">Pending</p>
              <p className="mt-3 text-3xl font-semibold text-amber-100">{summary.pending}</p>
            </div>
            <div className="rounded-3xl border border-sky-400/15 bg-sky-400/[0.05] p-5">
              <p className="text-sm text-sky-100/70">Contacted</p>
              <p className="mt-3 text-3xl font-semibold text-sky-100">{summary.contacted}</p>
            </div>
            <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.05] p-5">
              <p className="text-sm text-emerald-100/70">Completed</p>
              <p className="mt-3 text-3xl font-semibold text-emerald-100">{summary.completed}</p>
            </div>
          </div>

          <div className="grid gap-6 px-5 py-5 lg:grid-cols-[360px_minmax(0,1fr)] lg:px-8">
            <div className="rounded-[28px] border border-white/10 bg-black/25 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Search className="h-4 w-4 text-neutral-500" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by name, email, company..."
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value as 'all' | QuoteStatus)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none"
                >
                  <option value="all" className="bg-neutral-950">
                    All statuses
                  </option>
                  {quoteStatuses.map((status) => (
                    <option key={status} value={status} className="bg-neutral-950">
                      {statusLabels[status]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 flex items-center justify-between px-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <span>Requests</span>
                <span>{filteredQuotes.length} shown</span>
              </div>

              <div className="mt-4 space-y-3">
                {filteredQuotes.length ? (
                  filteredQuotes.map((quote) => {
                    const isSelected = quote.id === selectedId;

                    return (
                      <button
                        key={quote.id}
                        type="button"
                        onClick={() => setSelectedId(quote.id)}
                        className={`w-full rounded-[24px] border px-4 py-4 text-left transition ${
                          isSelected
                            ? 'border-[#7DD3FC]/40 bg-[#7DD3FC]/10 shadow-[0_0_0_1px_rgba(125,211,252,0.18)]'
                            : 'border-white/8 bg-white/[0.03] hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-white">{quote.name}</p>
                            <p className="mt-1 truncate text-sm text-neutral-400">{quote.email}</p>
                            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                              {quote.serviceType}
                            </p>
                          </div>
                          <span
                            className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${statusStyles[quote.status]}`}
                          >
                            {statusLabels[quote.status]}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                          <span>{quote.company || 'Independent'}</span>
                          <span>{formatDate(quote.createdAt)}</span>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="rounded-[24px] border border-dashed border-white/12 bg-white/[0.02] px-5 py-10 text-center text-sm text-neutral-400">
                    No quote requests match this filter yet.
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 sm:p-6">
              {error ? (
                <div className="mb-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              {message ? (
                <div className="mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  {message}
                </div>
              ) : null}

              {selectedQuote ? (
                <>
                  <div className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-2xl font-semibold text-white">{selectedQuote.name}</h2>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${statusStyles[selectedQuote.status]}`}
                        >
                          {statusLabels[selectedQuote.status]}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-neutral-400">
                        Submitted {formatDate(selectedQuote.createdAt)} and updated {formatDate(selectedQuote.updatedAt)}.
                      </p>
                    </div>

                    <div className="w-full sm:w-56">
                      <label
                        htmlFor="quote-status"
                        className="mb-2 block text-xs uppercase tracking-[0.2em] text-neutral-500"
                      >
                        Update status
                      </label>
                      <select
                        id="quote-status"
                        value={selectedQuote.status}
                        onChange={(event) =>
                          updateStatus(selectedQuote.id, event.target.value as QuoteStatus)
                        }
                        disabled={updatingId === selectedQuote.id}
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {quoteStatuses.map((status) => (
                          <option key={status} value={status} className="bg-neutral-950">
                            {statusLabels[status]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <a
                      href={`mailto:${selectedQuote.email}`}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-3 text-sm text-neutral-400">
                        <Mail className="h-4 w-4 text-[#7DD3FC]" />
                        Email
                      </div>
                      <p className="mt-3 text-lg font-medium text-white">{selectedQuote.email}</p>
                    </a>

                    <a
                      href={selectedQuote.phone ? `tel:${selectedQuote.phone}` : '#'}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center gap-3 text-sm text-neutral-400">
                        <Phone className="h-4 w-4 text-[#D8B4FE]" />
                        Phone
                      </div>
                      <p className="mt-3 text-lg font-medium text-white">
                        {selectedQuote.phone || 'Not provided'}
                      </p>
                    </a>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 text-sm text-neutral-400">
                        <Building2 className="h-4 w-4 text-[#FF9132]" />
                        Company
                      </div>
                      <p className="mt-3 text-lg font-medium text-white">
                        {selectedQuote.company || 'Not provided'}
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 text-sm text-neutral-400">
                        <BriefcaseBusiness className="h-4 w-4 text-[#7DD3FC]" />
                        Product or service
                      </div>
                      <p className="mt-3 text-lg font-medium text-white">{selectedQuote.serviceType}</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 text-sm text-neutral-400">
                        <DollarSign className="h-4 w-4 text-[#D8B4FE]" />
                        Budget range
                      </div>
                      <p className="mt-3 text-lg font-medium text-white">{selectedQuote.budgetRange}</p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3 text-sm text-neutral-400">
                        <Clock3 className="h-4 w-4 text-[#FF9132]" />
                        Timeline
                      </div>
                      <p className="mt-3 text-lg font-medium text-white">{selectedQuote.timeline}</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                      Project description
                    </p>
                    <p className="mt-4 whitespace-pre-wrap text-[15px] leading-7 text-neutral-200">
                      {selectedQuote.projectDescription}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex min-h-[360px] items-center justify-center rounded-[28px] border border-dashed border-white/12 bg-white/[0.02] text-center text-neutral-400">
                  Select a quote request to view its details.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

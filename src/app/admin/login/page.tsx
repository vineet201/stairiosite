import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';
import { AdminLoginForm } from '@/components/admin/admin-login-form';
import { getAdminSession } from '@/lib/admin-auth';

export const metadata: Metadata = {
  title: 'Admin Login | Stairio',
  description: 'Secure access to Stairio quote submissions.',
};

interface AdminLoginPageProps {
  searchParams: Promise<{ next?: string }>;
}

function getSafeNextPath(nextPath?: string) {
  if (typeof nextPath === 'string' && nextPath.startsWith('/admin/')) {
    return nextPath;
  }

  return '/admin/quotes';
}

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const [session, params] = await Promise.all([getAdminSession(), searchParams]);
  const nextPath = getSafeNextPath(params.next);

  if (session) {
    redirect(nextPath);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[12%] top-[12%] h-80 w-80 rounded-full bg-[#7DD3FC]/10 blur-[140px]" />
        <div className="absolute right-[10%] top-[22%] h-[28rem] w-[28rem] rounded-full bg-[#D8B4FE]/12 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[26rem] w-[26rem] rounded-full bg-[#FF9132]/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.24em] text-neutral-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#7DD3FC]" />
              Stairio Admin
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Review every quote request from one secure dashboard.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
              This panel pulls in submissions from your website quote form, keeps them organized by status, and lets you review each enquiry without touching the database directly.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-neutral-400">Live quote inbox</p>
                <p className="mt-3 text-lg font-medium text-white">Newest requests first</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-neutral-400">Status tracking</p>
                <p className="mt-3 text-lg font-medium text-white">Pending to completed</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm text-neutral-400">Direct follow-up</p>
                <p className="mt-3 text-lg font-medium text-white">Email and phone ready</p>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-[#080808]/85 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">Secure Login</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Sign in to continue</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Use the admin credentials configured on the server to open the quote management area.
            </p>

            <div className="mt-8">
              <AdminLoginForm nextPath={nextPath} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

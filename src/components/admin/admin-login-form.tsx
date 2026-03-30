'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, LockKeyhole, UserRound } from 'lucide-react';

interface AdminLoginFormProps {
  nextPath: string;
}

export function AdminLoginForm({ nextPath }: AdminLoginFormProps) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    startTransition(() => {
      void (async () => {
        const response = await fetch('/api/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Unable to sign in.');
          return;
        }

        router.push(nextPath);
        router.refresh();
      })();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="admin-username" className="mb-2 block text-sm font-medium text-neutral-300">
          Username
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <UserRound className="h-4 w-4 text-neutral-500" />
          <input
            id="admin-username"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your admin username"
            className="w-full bg-transparent text-white outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="admin-password" className="mb-2 block text-sm font-medium text-neutral-300">
          Password
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <LockKeyhole className="h-4 w-4 text-neutral-500" />
          <input
            id="admin-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your admin password"
            className="w-full bg-transparent text-white outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>

      {error ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#D8B4FE] via-[#7DD3FC] to-[#FF9132] px-4 py-3 font-medium text-neutral-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Signing in...' : 'Open Admin Panel'}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

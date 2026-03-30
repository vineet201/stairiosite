'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/ui/header-3';
import { FlickeringFooter } from '@/components/ui/flickering-footer';

interface SiteChromeProps {
  children: React.ReactNode;
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="pt-14">{children}</div>
      <FlickeringFooter />
    </>
  );
}

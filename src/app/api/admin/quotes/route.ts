import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/admin-auth';
import { listAdminQuotes } from '@/lib/admin-quotes';

export async function GET(request: NextRequest) {
  const session = getAdminSessionFromRequest(request);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const quotes = await listAdminQuotes();
    return NextResponse.json({ quotes });
  } catch (error) {
    console.error('Admin quote fetch error:', error);
    return NextResponse.json(
      { error: 'Unable to load quote requests right now.' },
      { status: 500 }
    );
  }
}

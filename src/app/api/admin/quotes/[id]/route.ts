import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import { getAdminSessionFromRequest } from '@/lib/admin-auth';
import { updateAdminQuoteStatus } from '@/lib/admin-quotes';
import { quoteStatuses, type QuoteStatus } from '@/types/quotes';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: NextRequest, context: RouteParams) {
  const session = getAdminSessionFromRequest(request);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;

  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: 'Invalid quote request id.' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const status = body.status as QuoteStatus;

    if (!quoteStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid quote status.' }, { status: 400 });
    }

    const quote = await updateAdminQuoteStatus(id, status);

    if (!quote) {
      return NextResponse.json({ error: 'Quote request not found.' }, { status: 404 });
    }

    return NextResponse.json({ quote });
  } catch (error) {
    console.error('Admin quote update error:', error);
    return NextResponse.json(
      { error: 'Unable to update this quote request right now.' },
      { status: 500 }
    );
  }
}

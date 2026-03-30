import { NextRequest, NextResponse } from 'next/server';
import { createAdminSession, validateAdminCredentials } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const username = typeof body.username === 'string' ? body.username.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required.' },
        { status: 400 }
      );
    }

    const result = validateAdminCredentials(username, password);

    if (!result.ok) {
      const status = result.error.includes('configured') ? 500 : 401;
      return NextResponse.json({ error: result.error }, { status });
    }

    await createAdminSession(username);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Unable to sign in right now. Please try again.' },
      { status: 500 }
    );
  }
}

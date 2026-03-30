import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

const ADMIN_SESSION_COOKIE = 'stairio_admin_session';
const ADMIN_SESSION_MAX_AGE = 60 * 60 * 24 * 7;

interface AdminConfig {
  username: string;
  password: string;
  sessionSecret: string;
}

interface AdminSessionPayload {
  username: string;
  issuedAt: number;
  nonce: string;
}

export interface AdminSession {
  username: string;
  issuedAt: number;
  expiresAt: number;
}

function getAdminConfig(): AdminConfig {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!username || !password || !sessionSecret) {
    throw new Error('ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET must be configured.');
  }

  return { username, password, sessionSecret };
}

export function isAdminAuthConfigured() {
  return Boolean(
    process.env.ADMIN_USERNAME &&
      process.env.ADMIN_PASSWORD &&
      process.env.ADMIN_SESSION_SECRET
  );
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function signPayload(payload: string, secret: string) {
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

function createToken(username: string) {
  const { sessionSecret } = getAdminConfig();
  const payload: AdminSessionPayload = {
    username,
    issuedAt: Date.now(),
    nonce: randomBytes(16).toString('hex'),
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = signPayload(encodedPayload, sessionSecret);

  return `${encodedPayload}.${signature}`;
}

function decodeToken(token?: string | null): AdminSession | null {
  if (!token || !isAdminAuthConfigured()) {
    return null;
  }

  const [encodedPayload, signature] = token.split('.');

  if (!encodedPayload || !signature) {
    return null;
  }

  const { username, sessionSecret } = getAdminConfig();
  const expectedSignature = signPayload(encodedPayload, sessionSecret);

  if (!safeEqual(signature, expectedSignature)) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf8')
    ) as Partial<AdminSessionPayload>;

    if (
      typeof payload.username !== 'string' ||
      typeof payload.issuedAt !== 'number' ||
      !safeEqual(payload.username, username)
    ) {
      return null;
    }

    const expiresAt = payload.issuedAt + ADMIN_SESSION_MAX_AGE * 1000;

    if (Date.now() > expiresAt) {
      return null;
    }

    return {
      username: payload.username,
      issuedAt: payload.issuedAt,
      expiresAt,
    };
  } catch {
    return null;
  }
}

export function validateAdminCredentials(username: string, password: string) {
  if (!isAdminAuthConfigured()) {
    return {
      ok: false as const,
      error: 'Admin credentials are not configured yet.',
    };
  }

  const config = getAdminConfig();

  if (!safeEqual(username, config.username) || !safeEqual(password, config.password)) {
    return {
      ok: false as const,
      error: 'Invalid username or password.',
    };
  }

  return { ok: true as const };
}

function getCookieOptions(maxAge = ADMIN_SESSION_MAX_AGE) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge,
  };
}

export async function createAdminSession(username: string) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, createToken(username), getCookieOptions());
}

export async function deleteAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, '', getCookieOptions(0));
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  return decodeToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
}

export function getAdminSessionFromRequest(request: NextRequest) {
  return decodeToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);
}

export async function requireAdminSession(loginPath = '/admin/login') {
  const session = await getAdminSession();

  if (!session) {
    redirect(loginPath);
  }

  return session;
}

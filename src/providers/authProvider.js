'use client';
import { SessionProvider } from 'next-auth/react';

export default function AuthProviders({ children }) {
  return (
    <SessionProvider>
      <main>{children}</main>
    </SessionProvider>
  );
}

import { Inter as inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const interFont = inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Next.js Basic App',
  description: 'Created with Next.js',
};

/**
 * Root layout component that wraps all pages with common providers and styles.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The rendered layout with theme provider and children.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interFont.variable}>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

'use client';

import { Home, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { logoutAction } from '@/actions/auth';
import { routes } from '@/lib/routes';

/**
 * Navbar component that displays the navigation bar.
 * @return {JSX.Element} The navbar component.
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={routes.home} className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Template</span>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Link
              href={routes.home}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href={routes.dashboard}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href={routes.users}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Users
            </Link>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {isAuthenticated ? (
              <form action={logoutAction}>
                <Button
                  type="submit"
                  variant="ghost"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Logout
                </Button>
              </form>
            ) : (
              <Link href={routes.login}>
                <Button
                  variant="ghost"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href={routes.home}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href={routes.dashboard}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Dashboard
          </Link>
          <Link
            href={routes.users}
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
          >
            Users
          </Link>
          {isAuthenticated ? (
            <form action={logoutAction}>
              <Button
                type="submit"
                variant="ghost"
                className="w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Logout
              </Button>
            </form>
          ) : (
            <Link
              href={routes.login}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

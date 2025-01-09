import { routes } from '@/lib/routes';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: routes.login,
    signOut: routes.home,
  },
  providers: [
    // credentials provider: https://authjs.dev/getting-started/authentication/credentials
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // TODO: implement real logic for authorization here
        let user = null;

        if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
          user = {
            id: '1',
            name: 'John Doe',
            email: credentials.email,
          };
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ request, auth }) => {
      // replace this logic with one that suits your needs
      // this callback is used to check if the user can access or not some pages
      // if the user is not allowed we can redirect to the login page
      const isAuthenticated = !!auth?.user;

      // we assume that all the non-public paths should be protected
      const PUBLIC_PATHS = [routes.login, routes.home];

      const isPublicPath = PUBLIC_PATHS.some((path) => request.nextUrl.pathname === path);

      if (!isPublicPath && !isAuthenticated) {
        return Response.redirect(new URL(routes.login, request.nextUrl.origin)); // redirect to login page
      }

      // otherwise, let the user access the page
      return true;
    },
  },
});

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import '../src/app/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const session = context.parameters.nextAuth?.session;

    return (
      <SessionProvider session={session}>
        <Story />
      </SessionProvider>
    );
  },
];

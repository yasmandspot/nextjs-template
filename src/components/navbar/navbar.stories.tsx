import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';
import { within, userEvent } from '@storybook/test';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  parameters: {
    nextAuth: {
      session: {
        user: {
          name: 'John Doe',
          email: 'john@example.com',
        },
      },
    },
  },
};

export const MobileMenuOpen: Story = {
  parameters: {
    chromatic: {
      viewports: [375],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const menuButton = canvas.getByRole('button', { name: /open menu/i });
    await userEvent.click(menuButton);
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { User } from './user';

const meta = {
  title: 'Components/User',
  component: User,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    user: {
      description: 'The user object containing all user information',
      control: 'object',
    },
  },
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      phone: '1-234-567-8900',
      website: 'johndoe.com',
      company: {
        name: 'Example Corp',
        catchPhrase: 'Making examples since 2023',
        bs: 'synergistic examples',
      },
      address: {
        street: '123 Example St',
        suite: 'Suite 100',
        city: 'Exampleville',
        zipcode: '12345',
        geo: {
          lat: '0',
          lng: '0',
        },
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    user: {
      id: 2,
      name: 'Jane Smith with a Very Long Name That Might Wrap',
      username: 'janesmith123',
      email: 'jane.smith.professional.account@verylongdomain.example.com',
      phone: '1-234-567-8900 ext. 12345',
      website: 'jane-smith-professional-portfolio.example.com',
      company: {
        name: 'Corporation with a Very Long Company Name Inc.',
        catchPhrase: 'Making the world a better place through exemplary examples',
        bs: 'paradigm shifting synergistic solutions',
      },
      address: {
        street: '987 Long Street Name Boulevard',
        suite: 'Executive Suite 789, Floor 42',
        city: 'Metropolitan City Center',
        zipcode: '12345-6789',
        geo: {
          lat: '0',
          lng: '0',
        },
      },
    },
  },
};

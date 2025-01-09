import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from './feature-card';
import { CircleHelp } from 'lucide-react';

const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    icon: {
      description: 'The icon component to display',
      control: 'object',
    },
    title: {
      description: 'The title text of the feature',
      control: 'text',
    },
    description: {
      description: 'The description text of the feature',
      control: 'text',
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <CircleHelp className="h-6 w-6" />,
    title: 'Example Feature',
    description: 'This is an example feature card that showcases the component.',
  },
};

export const LongContent: Story = {
  args: {
    icon: <CircleHelp className="h-6 w-6" />,
    title: 'Feature with Long Title That Might Wrap to Multiple Lines',
    description:
      'This is a longer description that demonstrates how the feature card handles more content. It includes multiple sentences to show text wrapping behavior.',
  },
};

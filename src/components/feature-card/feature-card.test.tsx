import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FeatureCard } from './feature-card';
import { CircleHelp } from 'lucide-react';

describe('FeatureCard', () => {
  const defaultProps = {
    icon: <CircleHelp data-testid="icon" className="h-6 w-6" />,
    title: 'Test Feature',
    description: 'Test description',
  };

  it('should match snapshot', () => {
    const { container } = render(<FeatureCard {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should display the title correctly', () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText('Test Feature')).toBeInTheDocument();
  });

  it('should display the description correctly', () => {
    render(<FeatureCard {...defaultProps} />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render the icon', () => {
    render(<FeatureCard {...defaultProps} />);
    // Check if the icon container is present
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should handle long content appropriately', () => {
    const longProps = {
      icon: <CircleHelp className="h-6 w-6" />,
      title: 'Very Long Feature Title That Might Wrap to Multiple Lines',
      description:
        'This is a very long description that should still be displayed properly within the card component and maintain its layout integrity.',
    };

    render(<FeatureCard {...longProps} />);
    expect(screen.getByText(longProps.title)).toBeInTheDocument();
    expect(screen.getByText(longProps.description)).toBeInTheDocument();
  });
});

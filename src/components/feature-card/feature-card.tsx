import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * FeatureCard component that displays a feature with an icon, title, and description.
 *
 * @param {FeatureCardProps} props - The component props.
 * @param {React.ReactNode} props.icon - The icon to display.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @return {JSX.Element} The rendered feature card.
 */
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center">{icon}</div>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

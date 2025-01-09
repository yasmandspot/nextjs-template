import type { User } from '@/services/user-service';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export interface UserProps {
  user: User;
}

/**
 * User component that displays user information.
 * @param {UserProps} props - The component props.
 * @param {User} props.user - The user object to display.
 * @return {JSX.Element} The rendered User component.
 */
export function User({ user }: UserProps) {
  return (
    <Card key={user.id}>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}
          , {user.address.zipcode}
        </p>
      </CardContent>
    </Card>
  );
}

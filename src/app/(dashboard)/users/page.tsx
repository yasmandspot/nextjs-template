import { User } from '@/components/user/user';
import { getUsers } from '@/services/user-service';

/**
 * Users page component that requires authentication.
 * @return {JSX.Element} The rendered users page.
 */
export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Users</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

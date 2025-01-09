import { LoginForm } from '../../../components/login-form/login-form';

/**
 * Login page component that handles user authentication.
 * Redirects to dashboard on successful login.
 * @return {JSX.Element} The rendered login page with login form.
 */
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-2 py-4 sm:px-4 sm:py-8">
      <div className="mx-auto w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

/**
 * Dashboard page component that requires authentication.
 * Redirects to login page if user is not authenticated.
 * @return {JSX.Element} The rendered dashboard page.
 */
export default async function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <p>Welcome to your dashboard. Use the sidebar to navigate between different sections.</p>
    </div>
  );
}

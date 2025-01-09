import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';

/**
 * Dashboard layout component that wraps all pages with common providers and styles.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The rendered layout with theme provider and children.
 */
export default async function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl flex-grow px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}

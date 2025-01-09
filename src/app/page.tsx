import Link from 'next/link';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Code, FileText } from 'lucide-react';
import { FeatureCard } from '@/components/feature-card/feature-card';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';
import { routes } from '@/lib/routes';

const technologies = [
  'Next.js (App Router)',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  'Storybook',
  'Chromatic',
  'Jest',
  'Prettier',
  'ESLint',
  'Husky',
  'CommitLint',
  'SonarQube',
  'CI/CD Ready',
];

/**
 * Home page component that redirects to the login page.
 * Acts as an entry point for the application.
 * @return {void} Redirects to the login page.
 */
export default async function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white py-12">
        <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-extrabold text-gray-900 sm:text-6xl">
              Next.js 15 Template
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              A powerful starting point for your next web application
            </p>
            <div className="flex justify-center space-x-4">
              <Link href={routes.dashboard}>
                <Button size="lg" className="font-semibold">
                  Explore the Template
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://repo.ciberos.com/bep/frontend/nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="font-semibold">
                  View on GitLab
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Code className="h-8 w-8 text-blue-600" />}
              title="Standardized Code Style"
              description="Enforced code consistency with Prettier and ESLint for clean, maintainable code."
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8 text-green-600" />}
              title="Type-Safe Development"
              description="Leverage TypeScript for enhanced code quality and developer productivity."
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-purple-600" />}
              title="Best Practices Enforced"
              description="Integrated tools ensure adherence to modern development standards and practices."
            />
          </div>

          {/* Technologies List */}
          <div className="mb-16 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Included Technologies</h2>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
            <p className="mb-8 text-xl text-gray-600">
              Clone the repository and start building your next great idea today!
            </p>
            <Link href={routes.dashboard}>
              <Button size="lg" className="font-semibold">
                Explore the Template
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

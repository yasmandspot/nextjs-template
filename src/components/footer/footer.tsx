/**
 * Footer component that displays the copyright information.
 * @return {JSX.Element} The footer component.
 */
export function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} DSpot Next.js 15 Template. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

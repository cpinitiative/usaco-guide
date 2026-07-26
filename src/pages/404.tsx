import Link from 'next/link';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 - Page Not Found" image={undefined} />
      <TopNavigationBar />

      <main className="mt-16 px-4 text-center">
        <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 sm:text-5xl">
          404 — Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-xl text-blue-600 underline dark:text-blue-400">
            Return Home
          </Link>
        </p>
      </main>
    </Layout>
  );
}

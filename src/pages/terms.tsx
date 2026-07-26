import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

export default function TermsPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Terms of Service" />
      <TopNavigationBar />
      <div className="bg-gray-100 dark:bg-black">
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Terms of Service
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Last updated: July 23, 2026
        </p>

        <section className="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using the USACO Guide, you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Use License
          </h2>
          <p>
            Content on USACO Guide is licensed under a Creative Commons Attribution-NonCommercial
            4.0 International License. You are free to share and adapt the materials for
            non-commercial purposes, provided you give appropriate credit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            User Conduct
          </h2>
          <p>
            You agree not to use our service for any unlawful purpose or in any way that could
            damage, disable, or impair the service. You must not attempt to gain unauthorized access
            to any part of the service or its related systems or networks.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            User Content
          </h2>
          <p>
            By submitting content to our platform, you grant us a worldwide, non-exclusive,
            royalty-free license to use, reproduce, and display that content in connection with
            providing the service. You represent and warrant that you have all rights necessary to
            grant this license.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Disclaimer
          </h2>
          <p>
            The materials on USACO Guide are provided on an &apos;as is&apos; basis. We make no warranties,
            expressed or implied, and hereby disclaim and negate all other warranties including,
            without limitation, implied warranties or conditions of merchantability.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Limitations
          </h2>
          <p>
            In no event shall USACO Guide or its suppliers be liable for any damages arising out of
            the use or inability to use the materials on our service, even if we have been notified
            of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Modifications
          </h2>
          <p>
            We may revise these terms of service at any time without notice. By using this service,
            you agree to be bound by the then-current version of these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:usacoguide@gmail.com" className="text-blue-600 underline">
              usacoguide@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
      </div>
    </Layout>
  );
}

import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

export default function PrivacyPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <TopNavigationBar />
      <div className="bg-gray-100 dark:bg-black">
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Last updated: July 23, 2026
        </p>

        <section className="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as when you create an account,
            submit content, or contact us. This may include your name, email address, and any content
            you submit through our platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services,
            communicate with you, and personalize your experience. We may also use aggregated,
            anonymized data for analytics and research purposes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Data Storage and Security
          </h2>
          <p>
            Your data is stored securely using Firebase services. We implement appropriate technical
            and organizational measures to protect your personal information. However, no method of
            transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Third-Party Services
          </h2>
          <p>
            We use third-party services including Google Analytics, Algolia for search, and Firebase
            for authentication and database services. These services may collect information about
            your use of our site as described in their respective privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Cookies
          </h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service and
            hold certain information. You can set your browser to refuse all or some browser
            cookies, but this may affect the functionality of our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Children's Privacy
          </h2>
          <p>
            Our service is designed for students and educators. If you are under the age of 13,
            please do not provide any personal information. We do not knowingly collect personal
            information from children under 13.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes
            by posting the new policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
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

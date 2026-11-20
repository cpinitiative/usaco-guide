import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

const LAST_UPDATED = 'November 18, 2026';

const linkClass =
  'text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300';

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={linkClass} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="How the USACO Guide collects, uses, and protects your information."
      />

      <TopNavigationBar />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mt-8 text-4xl font-extrabold">Privacy Policy</h1>
        <p className="dark:text-dark-med-emphasis mt-2 text-gray-500">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="dark:text-dark-high-emphasis mt-6 text-lg text-gray-900">
          <p className="mb-8">
            The USACO Guide (usaco.guide) is a free, open-source resource run by
            the Competitive Programming Initiative (&quot;we&quot;,
            &quot;us&quot;). This policy explains what information we collect
            when you use the site, how we use it, and the choices you have.
          </p>

          <Section title="Information We Collect">
            <p className="mb-2">
              <strong>Without an account.</strong> You can use the Guide without
              signing in. In that case, your settings and progress are stored
              only in your browser&apos;s local storage and are not sent to us.
            </p>
            <p className="mb-2">
              <strong>When you sign in.</strong> You may sign in with Google or
              GitHub through Firebase Authentication. From your Google or GitHub
              account, we receive only basic profile information:
            </p>
            <ul className="mb-4 list-disc pl-10">
              <li>Your name (display name)</li>
              <li>Your email address</li>
              <li>Your profile picture</li>
              <li>A unique account identifier</li>
            </ul>
            <p className="mb-4">
              We do not request access to your Google Drive, Gmail, contacts,
              calendar, or any other Google data, and we never receive your
              password.
            </p>
            <p className="mb-2">
              <strong>Data you create on the site.</strong> When signed in, we
              store the following in our database so it syncs across devices:
            </p>
            <ul className="mb-4 list-disc pl-10">
              <li>
                Module and problem progress, solutions you mark as viewed, and
                visit history used for streaks
              </li>
              <li>Settings such as preferred language and theme</li>
              <li>
                If you use Groups: groups you join or create, and your
                submissions and scores within those groups
              </li>
            </ul>
            <p className="mb-2">
              <strong>Forms you submit.</strong> If you use the contact form or
              suggest a problem, we collect the name, email address, and message
              you provide.
            </p>
            <p className="mb-2">
              <strong>Usage data.</strong> We use Google Analytics to understand
              aggregate site traffic (for example, which pages are visited). We
              also keep anonymous page view counts.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="mb-4 list-disc pl-10">
              <li>To sign you in and keep your account secure</li>
              <li>To save and sync your progress and settings</li>
              <li>
                To show your name and profile picture to other members of Groups
                you join (group owners and admins can also see your email
                address)
              </li>
              <li>To respond to messages you send us</li>
              <li>To understand how the site is used and improve it</li>
            </ul>
            <p className="mb-4">
              We do not sell your personal information, and we do not use it for
              advertising.
            </p>
          </Section>

          <Section title="Google User Data">
            <p className="mb-4">
              The USACO Guide&apos;s use and transfer of information received
              from Google APIs adheres to the{' '}
              <ExternalLink href="https://developers.google.com/terms/api-services-user-data-policy">
                Google API Services User Data Policy
              </ExternalLink>
              , including the Limited Use requirements. Information we receive
              through Google Sign-In (your name, email address, and profile
              picture) is used only to provide the sign-in and account features
              described above. We do not transfer it to others except as needed
              to provide those features, to comply with the law, or as part of a
              merger or acquisition, and we do not use it to serve ads or build
              advertising profiles. No human reads it except with your consent,
              for security purposes, or to comply with the law.
            </p>
          </Section>

          <Section title="How Information Is Shared">
            <p className="mb-2">
              We share information only with service providers that help us run
              the site:
            </p>
            <ul className="mb-4 list-disc pl-10">
              <li>
                <strong>Google Firebase</strong> (authentication, database, and
                server functions)
              </li>
              <li>
                <strong>Google Analytics</strong> (aggregate usage statistics)
              </li>
              <li>
                <strong>Vercel</strong> (website hosting)
              </li>
              <li>
                <strong>Algolia</strong> (site search; receives your search
                queries)
              </li>
              <li>
                <strong>GitHub</strong> (contact form messages are filed as
                issues in our public{' '}
                <ExternalLink href="https://github.com/cpinitiative/usaco-guide">
                  GitHub repository
                </ExternalLink>
                ; your name and email address are not included in the public
                issue, but the message, topic, and page URL are)
              </li>
            </ul>
            <p className="mb-4">
              We may also disclose information if required by law.
            </p>
          </Section>

          <Section title="Cookies and Local Storage">
            <p className="mb-4">
              We use your browser&apos;s local storage to save your settings and
              progress. Firebase uses browser storage to keep you signed in, and
              Google Analytics uses cookies to distinguish visitors. You can
              block cookies or clear site data in your browser settings, though
              some features may stop working.
            </p>
          </Section>

          <Section title="Data Retention and Deletion">
            <p className="mb-4">
              We keep your account data for as long as your account exists. You
              can export or permanently delete your progress and settings at any
              time from the{' '}
              <Link href="/settings" className={linkClass}>
                Settings
              </Link>{' '}
              page.
            </p>
          </Section>

          <Section title="Security">
            <p className="mb-4">
              Your data is stored on Google Firebase, which encrypts data in
              transit and at rest, and access to our database is restricted by
              security rules. No method of storage is perfectly secure, but we
              take reasonable measures to protect your information.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p className="mb-4">
              The Guide is designed for students, including those in middle and
              high school. We do not knowingly collect personal information from
              children under 13 beyond what is described in this policy.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p className="mb-4">
              We may update this policy from time to time. When we do, we will
              revise the &quot;Last updated&quot; date above.
            </p>
          </Section>

          <Section title="Contact Us">
            <p className="mb-6">
              If you have questions about this policy, contact us at{' '}
              <a href="mailto:usacoguide@gmail.com" className={linkClass}>
                usacoguide@gmail.com
              </a>
              .
            </p>
          </Section>

          <Link href="/" className={`mb-4 block ${linkClass}`}>
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

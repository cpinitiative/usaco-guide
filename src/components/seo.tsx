import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteMetadata } from '../../next.config';

// F-19: constrain the meta prop to a known shape rather than any[].
// This prevents callers from injecting arbitrary attributes (e.g. httpEquiv=refresh).
interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface SEOProps {
  description?: string;
  // F-27: lang prop is kept for API compatibility but is no longer emitted as
  // <html lang> — that attribute is already set in _document.tsx's <Html lang="en">.
  // Setting it again from inside <Head> is redundant and can cause conflicts.
  lang?: string;
  meta?: MetaTag[];
  title?: string | null;
  image?: { src: string; height: number; width: number } | null;
}

const SEO: React.FC<SEOProps> = ({
  description,
  // lang is accepted for backward compatibility but intentionally unused here
  meta = [],
  title,
  image,
}) => {
  const { asPath } = useRouter();
  // Remove trailing slash to avoid double-slash canonicals (e.g. https://usaco.guide//dashboard)
  const siteUrl = siteMetadata.siteUrl.replace(/\/$/, '');
  const siteTitle = siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  // Strip query string and hash from canonical URL to avoid duplicate content issues
  const canonicalPath = asPath.split('?')[0].split('#')[0];
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const defaultImage = '/assets/social-media-image.jpg';

  const metaImage = image || {
    src: defaultImage,
    height: 675,
    width: 1200,
  };

  const fullImageUrl = `${siteUrl}${metaImage.src}`;

  const metaTags: MetaTag[] = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'keywords',
      content: siteMetadata.keywords.join(','),
    },
    {
      property: 'og:title',
      content: title || 'USACO Guide',
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      property: 'og:image',
      content: fullImageUrl,
    },
    {
      // og:image:width and og:image:height help crawlers render the correct
      // preview card size without having to download the image first.
      property: 'og:image:width',
      content: String(metaImage.width),
    },
    {
      property: 'og:image:height',
      content: String(metaImage.height),
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: siteMetadata.author,
    },
    {
      name: 'twitter:creator',
      content: siteMetadata.author,
    },
  ];

  return (
    <Head>
      {/*
        F-27: Do NOT set <html lang> from within <Head> — it is already set in
        _document.tsx. Setting it here is redundant and may conflict with the
        document-level value on client-side navigation.
      */}
      <title>{title ? `${title} · ${siteTitle}` : siteTitle}</title>
      {/*
        Canonical URL is the authoritative source for this page.
        Strip query string + hash to prevent duplicate-content penalties.
      */}
      <link rel="canonical" href={canonicalUrl} />
      {/*
        Render all meta tags from the metaTags array (includes description,
        keywords, og:*, twitter:*) plus any caller-supplied extras.
        Note: Next.js already emits <meta name="viewport"> by default —
        we do NOT add it here to avoid duplication.
      */}
      {metaTags.concat(meta).map(tag => (
        <meta key={tag.name || tag.property} {...tag} />
      ))}
    </Head>
  );
};

export default SEO;

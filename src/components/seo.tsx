import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteMetadata } from '../../next.config';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
  image?: {
    src: string;
    height: number;
    width: number;
  };
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'en',
  meta = [],
  title,
  image,
}) => {
  const { asPath } = useRouter();
  const siteUrl = siteMetadata.siteUrl;
  const siteTitle = siteMetadata.title;
  const metaDescription = description || siteMetadata.description;
  const canonicalUrl = `${siteUrl}${asPath}`;
  const defaultImage = '/assets/social-media-image.jpg';

  const metaImage = image || {
    src: defaultImage,
    height: 675, // Adjust dimensions as needed
    width: 1200,
  };

  const fullImageUrl = `${siteUrl}${metaImage.src}`;

  const metaTags = [
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
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: fullImageUrl,
    },
    {
      property: 'og:image:width',
      content: metaImage.width.toString(),
    },
    {
      property: 'og:image:height',
      content: metaImage.height.toString(),
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
  ];

  return (
    <Head>
      <html lang={lang} />
      <title>{title ? `${title} · ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {metaTags.concat(meta).map(meta => (
        <meta key={meta.name || meta.property} {...meta} />
      ))}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default SEO;

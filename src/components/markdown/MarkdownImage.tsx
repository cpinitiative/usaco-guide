import ImageBase from 'next/image';

export default function MarkdownImage({
  src,
  alt,
  title,
  style,
  width: customWidth,
  centered,
}: {
  src: string;
  alt?: string;
  title?: string;
  style?: React.CSSProperties;
  width?: number;
  centered?: boolean;
}) {
  const fallBackSvg = `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/>`
  ).toString('base64')}`;

  const imageStyle: React.CSSProperties = customWidth
    ? {
        width: customWidth,
        height: 'auto',
        maxWidth: '100%',
        ...(centered && { display: 'block', marginLeft: 'auto', marginRight: 'auto' }),
      }
    : { width: '100%', height: '100%' };

  return (
    <ImageBase
      src={src}
      alt={alt ?? ''}
      title={title}
      width={0}
      height={0}
      className="m-0"
      style={imageStyle}
      sizes="(max-width: 768px) 100vw, 768px"
      placeholder="blur"
      blurDataURL={fallBackSvg}
      unoptimized
    />
  );
}

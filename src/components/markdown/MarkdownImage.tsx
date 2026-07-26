import ImageBase from 'next/image';

export default function MarkdownImage({
  src,
  alt,
  title,
  width: customWidth,
  centered,
}: {
  src: string;
  alt?: string;
  title?: string;
  width?: number;
  centered?: boolean;
}) {
  const imageStyle: React.CSSProperties = customWidth
    ? {
        width: customWidth,
        height: 'auto',
        maxWidth: '100%',
        ...(centered && {
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
        }),
      }
    : { width: '100%', height: '100%' };

  return (
    <ImageBase
      src={src}
      alt={alt ?? ''}
      title={title}
      width={customWidth || 1200}
      height={800}
      className="m-0"
      style={imageStyle}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
    />
  );
}

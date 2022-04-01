import React from 'react';

export const CPIProjectCard = ({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: React.ReactNode;
}): JSX.Element => (
  <div className="p-4 transition hover:bg-[#eee] relative flex flex-col">
    <div className="flex-1">
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
      <p className="mt-2">{children}</p>
    </div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="usaco-link mt-2 inline-block"
    >
      Learn More
    </a>
  </div>
);

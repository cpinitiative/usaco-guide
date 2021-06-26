import * as React from 'react';
import Info from '../../markdown/Info';

export default function ModuleHeadersLinkList(props: {
  title: string;
  links: { label: string; url?: string }[];
}) {
  return (
    <Info title={props.title}>
      <ul className="list-disc list-inside pl-3 space-y-1">
        {props.links.map(link => (
          <li key={link.url ?? link.label}>
            {link.url ? (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="underline text-black dark:text-blue-200"
              >
                {link.label}
              </a>
            ) : (
              <span className="text-black dark:text-blue-200">
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Info>
  );
}

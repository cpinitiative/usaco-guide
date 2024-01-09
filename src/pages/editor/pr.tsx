import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

export default function EditorPagePr(props: PageProps): JSX.Element {
  const [token, setToken] = useState<string | null>('');
  useEffect(
    () => setToken(new URLSearchParams(props.location.search).get('token')),
    []
  );
  return <p>{token}</p>;
}

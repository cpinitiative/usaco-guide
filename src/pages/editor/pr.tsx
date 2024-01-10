import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';

export default function EditorPagePr(props: PageProps): JSX.Element {
  const [token, setToken] = useState<string | null>('');
  useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    const code = searchParams.get('code');
    console.log('fetching');
    fetch('/api/get-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    }).then(async res => setToken((await res.json()).token));
    // setToken(searchParams.get('code'));
  }, []);
  return <p>{token}</p>;
}

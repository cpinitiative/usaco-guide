import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';

export default function EditorPagePr(props: PageProps): JSX.Element {
  const [token, setToken] = useState<string | null>('fetching token...');
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
  }, []);
  return (
    <Layout>
      <p>{token}</p>
    </Layout>
  );
}

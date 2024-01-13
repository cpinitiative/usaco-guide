import { PageProps } from 'gatsby';
import { useAtomValue } from 'jotai';
import React, { useEffect, useState } from 'react';
import { filesListAtom } from '../../atoms/editor';
import Layout from '../../components/layout';

export default function EditorPagePr(props: PageProps): JSX.Element {
  const [token, setToken] = useState<string | null>('fetching token...');
  const files = useAtomValue(filesListAtom);
  console.log(files);
  // for (const file of files) console.log(useAtomValue(filesFamily(file)).markdown);
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

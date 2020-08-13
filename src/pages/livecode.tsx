import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import { useRef } from 'react';
import '../assets/firepad.css';
import loadjs from 'loadjs';
import useFirebase from '../hooks/useFirebase';

const getExampleRef = firebase => {
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
  }
  if (typeof console !== 'undefined') {
    console.log('Firebase data: ', ref.toString());
  }
  return ref;
};

export default function LiveCodePage(props: PageProps) {
  const ref = useRef();
  const scriptRef = useRef();

  useFirebase(firebase => {
    window.firebase = firebase;
    loadjs(
      [
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js',
        'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/clike/clike.js',
        'https://firepad.io/releases/v1.5.9/firepad.min.js',
      ],
      () => {
        const database = import('firebase/database');
        database.then(() => {
          var firepadRef = getExampleRef(firebase);

          //// Create CodeMirror (with line numbers and the JavaScript mode).
          var codeMirror = CodeMirror(ref.current, {
            lineNumbers: true,
            mode: 'text/x-c++src',
          });

          //// Create Firepad.
          var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
            defaultText:
              '#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n  cout << "Hello World!" << endl;\n}\n',
          });
        });
      }
    );
  });

  return (
    <Layout>
      <SEO title="Live Coding" />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css"
        />
      </Helmet>

      <div className="h-screen" ref={ref} />
    </Layout>
  );
}

//https://codepen.io/FLCcrakers/pen/JZVeZE?editors=0111

import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

function NotesEditor() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.document) {
      console.log(
        `bailing out of the useeffect. Going to continue to render??`
      );
      return;
    }
  }, []);

  console.log(`reached before render`);

  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) {
    return;
  }
  return <ReactQuill theme="snow" formats={formats} modules={modules} />;
}

export default NotesEditor;

import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'code'],
    ['clean'],
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
  'code',
];

export default class NotesEditor extends Component {
  render() {
    if (typeof window !== 'undefined' && document) {
      console.log('Quill Active');
      return (
        <ReactQuill
          theme="snow"
          value="Hello"
          modules={modules}
          formats={formats}
        />
      );
    } else {
      console.log('Quill inactive');
      return <textarea />;
    }
  }
}

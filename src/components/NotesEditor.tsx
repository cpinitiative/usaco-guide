import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['code-block', { background: [] }],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  'header',
  'font',
  'size',
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
  'video',
  'code-block',
  'background',
];

export default class NotesEditor extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    if (typeof window !== 'undefined' && document) {
      console.log('Quill Active');
      return (
        <ReactQuill
          theme="snow"
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={modules}
          formats={formats}
          bounds={'.app'}
          placeholder="




"
        />
      );
    } else {
      console.log('Quill inactive');
      return <textarea />;
    }
  }
}

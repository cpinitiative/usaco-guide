import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class NotesEditor extends Component<any, any> {
  private modules = {
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

  private formats = [
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

  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.props.save(html);
    this.setState({ editorHtml: html });
  }

  componentDidMount() {
    this.setState({
      editorHtml: '',
    });
  }

  render() {
    if (typeof window !== 'undefined' && document) {
      console.log('Quill Active');
      return (
        <ReactQuill
          theme="snow"
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={this.modules}
          formats={this.formats}
          placeholder=""
        />
      );
    } else {
      console.log('Quill inactive');
      return <textarea />;
    }
  }
}

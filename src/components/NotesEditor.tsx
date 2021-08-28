import React, { Component } from 'react';

export default class FormHtmlEditor extends Component {
  private ReactQuill = false;
  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill');
    }
  }

  render() {
    const ReactQuill = this.ReactQuill;
    if (typeof window !== 'undefined' && ReactQuill) {
      return <ReactQuill theme="snow" value="Hello" />;
    } else {
      return <textarea />;
    }
  }
}

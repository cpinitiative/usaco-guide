import React, { Component } from 'react';

let ReactQuill;
export default class FormHtmlEditor extends Component {
  componentDidMount() {
    require.ensure([], function (require) {
      ({ ReactQuill } = require('react-quill'));
    });
  }

  render() {
    if (typeof window !== 'undefined' && ReactQuill) {
      return <ReactQuill theme="snow" value="Hello" />;
    } else {
      return <textarea />;
    }
  }
}

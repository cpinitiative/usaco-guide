//https://codepen.io/FLCcrakers/pen/JZVeZE?editors=0111

import Loadable from '@loadable/component';
import React, { Component } from 'react';
import ReactQuill from 'react-quill';

type MyState = { text: string };

class NotesEditor extends Component<any, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      text: "<div contenteditable='false'>wo</div>",
    };
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
    ],
  };

  formats = [
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
  handleProcedureContentChange = (content, delta, source, editor) => {
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  render() {
    return (
      <ReactQuill
        theme="snow"
        modules={this.modules}
        formats={this.formats}
        value={this.state.text}
        onChange={this.handleProcedureContentChange}
      >
        <div className="my-editing-area" />
      </ReactQuill>
    );
  }
}
const Editor = Loadable(() => import('./NotesEditor'));
export default Editor;

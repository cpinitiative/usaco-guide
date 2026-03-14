import MonacoEditor from "@monaco-editor/react";
import React from "react";

export default function BaseEditor(props) {
  return <MonacoEditor {...props} />;
}

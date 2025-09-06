import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ language, value }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg my-4 border border-gray-200">
      <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers wrapLongLines>
        {value}
      </SyntaxHighlighter>
    </div>
  );
} 
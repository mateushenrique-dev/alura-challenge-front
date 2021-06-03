import React from 'react';

function CodeField({ editable, code }) {
  return (
    <div className="codeEditor__highlight">
      <div className="codeEditor__highlight__circle">
        <span className="codeEditor__highlight__circle-1"></span>
        <span className="codeEditor__highlight__circle-2"></span>
        <span className="codeEditor__highlight__circle-3"></span>
      </div>
      <pre className="codeEditor__highlight__codeField"><code contentEditable={editable} type="text">{code}</code></pre>
    </div>
  );
}

export default CodeField
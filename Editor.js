import React, { useState, useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';

const Editor = () => {
  const [content, setContent] = useState('');
  const { saveDocument } = useContext(DocumentContext);

  const handleSave = () => {
    saveDocument(content);
  };

  return (
    <div className="editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing..."
      ></textarea>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;

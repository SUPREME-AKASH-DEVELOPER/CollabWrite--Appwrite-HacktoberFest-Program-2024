import React, { createContext, useState } from 'react';

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);

  const saveDocument = (content) => {
    // Save document logic here
    console.log('Saving document:', content);
  };

  return (
    <DocumentContext.Provider value={{ documents, saveDocument }}>
      {children}
    </DocumentContext.Provider>
  );
};

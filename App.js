import React from 'react';
import Editor from './components/Editor';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CollabWrite</h1>
      <Editor />
      <Chat />
    </div>
  );
}

export default App;

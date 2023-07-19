import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Editor from "react-run-code";

function App() {
  return (
    <div>
      <Editor id="10" modelsInfo={[{
        filename: "test.py",
        value: "def hello_world(): \n",
        language: "javascript",
      }]} />
    </div>
  );
}

export default App;

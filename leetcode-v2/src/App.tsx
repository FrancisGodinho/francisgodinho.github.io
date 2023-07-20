import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Editor from "react-run-code";

function App() {
  return (
    <div style={{backgroundColor: "#1e1e1e", height: "100vh"}}>
      <Editor id="10" modelsInfo={[{
        filename: "test.py",
        value: "def hello_world(): \n",
        language: "python",
      }]} />
    </div>
  );
}

export default App;

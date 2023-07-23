import React from 'react'
import { PyScriptProvider, PyScript, PyRepl, PyTerminal, PyConfig } from "pyscript-react";
import problems from '../problems/problems';

const Problem = () => {

  return (
    <div style={{width: "50%", height: "50vh"}}>
      <div style={{position: "absolute", left:1000000, zIndex: -1000000}}>
        <div id="output"></div>
      </div>
      <PyScriptProvider>
        <PyRepl output="output" autoGenerate={false} auto-generate={false}>
          {problems["funky-functions"].code}
        </PyRepl>
      </PyScriptProvider>
    </div>
  );
}

export default Problem
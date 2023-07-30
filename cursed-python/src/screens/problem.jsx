import React, { useEffect, useRef } from 'react'
import { PyScriptProvider, PyScript, PyRepl, PyTerminal, PyConfig } from "pyscript-react";
import { useParams } from 'react-router-dom';
import problems from '../problems/problems';
import NavBar from '../components/NavBar';
import { ProblemTag } from '../components/ProblemBox';

const Problem = ({}) => {
  const { id } = useParams();

  console.log(id);
  const problem = problems.filter((p) => p.id === id)[0];


  const setup = async () => {
    // need to remove auto-generate from py-internal-0
    let elem = undefined;
    while(elem === undefined){
      await new Promise((r) => setTimeout(r, 50));
      const data = document.querySelectorAll('[exec-id="0"]');
      elem = data[0];
    }
    elem.removeAttribute("auto-generate");
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <div style={{width: "100%", height: "100%"}}>
      <NavBar />
      <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", marginTop: "2%"}} className="container">
        <div style={{width: "80%", backgroundColor: "whitesmoke", padding: "1rem", borderRadius: "12px"}}>
          <div style={{display: "flex", alignItems: "center", marginBottom: "2rem"}}>
            <h2>{problem.title}</h2>
            <ProblemTag difficulty={problem.difficulty} style={{width: "4%", height: "50%", marginLeft: "0.6rem"}}/>
          </div>
          <h3>What is the output of the following code?</h3>
          <h5 style={{marginBottom: "1rem"}}>Press Shift+Enter to see output</h5>
          <PyScriptProvider>
            <PyRepl output-mode={"replace"} autoGenerate={"false"}>
              {problem.code}
            </PyRepl>
          </PyScriptProvider>
        </div>
      </div>
    </div>
  );
}

export default Problem;
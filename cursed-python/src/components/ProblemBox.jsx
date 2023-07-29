import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProblemTag = ({ difficulty }) => {

  const bg = {
    "easy": "#2B754D",
    "medium": "#9D7B21", 
    "hard": "#912D27",
  };

  return (
    <div style={{backgroundColor: bg[difficulty] ?? "grey", color: "whitesmoke", padding: "0.2rem", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", width: "22%", fontSize: "0.7rem"}}>
      {difficulty}
    </div>
  )
};

function ProblemBox({ problem }) {

  const navigate = useNavigate();
  const OFF_HOVER = "#fdfdfd";
  const ON_HOVER = "#e4e4e4";

  const [bg, setBg] = useState(OFF_HOVER);

  return (
    <div 
      style={{backgroundColor: bg, width: "12rem", height: "4rem", padding: "1rem", borderRadius: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}
      onClick={() => {navigate(`/problem/${problem.id}`)}}
      onMouseEnter={() => setBg(ON_HOVER)}
      onMouseLeave={() => setBg(OFF_HOVER)}
    >
      <div style={{width: "100%"}}>
        {problem.title}
      </div>
      <div style={{width: "100%", display: "flex", justifyContent: "flex-end"}}>
        <ProblemTag difficulty={problem.difficulty}/>
      </div>
    </div>
  )
}

export default ProblemBox
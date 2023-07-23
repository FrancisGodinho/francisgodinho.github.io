import React from 'react'

function ProblemBox({ title, onClick }) {
  return (
    <div 
        style={{backgroundColor: "#f2f2f2", width: "16rem", height: "4rem", padding: "1rem", borderRadius: "12px", fontFamily: "InriaSans"}}
        onClick={() => onClick && onClick()}
    >
        {title}
    </div>
  )
}

export default ProblemBox
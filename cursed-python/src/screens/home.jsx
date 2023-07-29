import React, {useState, useEffect} from 'react'
import logo from "../assets/logo.png";
import colors from '../constants/colors';
import ProblemBox from '../components/ProblemBox';
import problems from '../problems/problems';

function Home() {

    const BOX_PER_ROW = 4;

    const SubSection = ({ problems }) => {
        return (
            <div style={{display: "flex", flexDirection: "column", marginBottom: "4rem"}}>
                {Array.from(Array(Math.ceil(problems.length / BOX_PER_ROW))).map((_, i) => {
                    return (
                        <div key={i} style={{display: "flex", flexDirection: "row", marginBottom: "2rem"}}>
                            {problems.slice(BOX_PER_ROW * i, BOX_PER_ROW * (i + 1)).map((problem, j) => {
                                return (
                                    <div style={{marginLeft: "2rem"}}>
                                        <ProblemBox key={`pb-${i}-${j}`} problem={problem}/>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }

    const EASY_PROBLEMS = problems.filter((p) => p.difficulty === "easy");
    const MEDIUM_PROBLEMS = problems.filter((p) => p.difficulty === "medium");
    const HARD_PROBLEMS = problems.filter((p) => p.difficulty === "hard");
    
    return (
        <div style={{width: "100%", height: "100%", backgroundColor: colors.primary}}>
            <div style={{position: "fixed", padding: "3rem", width: "100%", backgroundColor: colors.primary}}>
                <img src={logo} style={{width: "18rem"}}></img>
            </div>
            <div style={{width: "100%"}}>
                <div style={{width: "100%", transform: "translateY(50%) skewY(-5deg)"}}>
                    <div style={{backgroundColor: colors.secondary, width: "100%", paddingTop: "24rem"}}>
                    </div>
                </div>
                <div style={{height: "100vh", backgroundColor: colors.secondary, transform: "translateY(0%)", paddingLeft: "5rem", paddingRight: "5rem"}}>
                    <SubSection problems={EASY_PROBLEMS}/>
                    <SubSection problems={MEDIUM_PROBLEMS}/>
                    <SubSection problems={HARD_PROBLEMS}/>
                </div>
            </div>
        </div>
    )
}

export default Home
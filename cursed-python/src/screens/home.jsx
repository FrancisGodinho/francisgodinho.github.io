import React, {useState, useEffect} from 'react'
import logo from "../assets/logo.png";
import colors from '../constants/colors';
import ProblemBox from '../components/ProblemBox';
import problems from '../problems/problems';
import NavBar from '../components/NavBar';

function Home() {

    const BOX_PER_ROW = 4;

    const SubSection = ({ problems }) => {
        return (
            <div style={{display: "flex", flexDirection: "column", marginBottom: "4rem"}}>
                {Array.from(Array(Math.ceil(problems.length / BOX_PER_ROW))).map((_, i) => {
                    return (
                        <div key={i} style={{display: "flex", flexDirection: "row", marginBottom: "1.5rem"}}>
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
            <NavBar fixed />
            <div style={{width: "100%", transform: "translateY(50%) skewY(-5deg)", paddingTop: "24rem", backgroundColor: colors.secondary}} />
            <div style={{height: "100%", backgroundColor: colors.secondary, transform: "translateY(0%)", padding: "0rem 5rem 10rem 5rem"}}>
                <SubSection problems={EASY_PROBLEMS}/>
                <SubSection problems={MEDIUM_PROBLEMS}/>
                <SubSection problems={HARD_PROBLEMS}/>
            </div>
        </div>
    )
}

export default Home
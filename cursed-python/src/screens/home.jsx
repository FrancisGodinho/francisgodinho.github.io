import React, {useState, useEffect} from 'react'
import logo from "../assets/logo.png";
import colors from '../constants/colors';
import ProblemBox from '../components/ProblemBox';
import problems from '../problems/problems';

function Home() {

    const BOX_PER_ROW = 4;
    
    return (
        <div style={{width: "100%", height: "100%", backgroundColor: colors.primary}}>
            <div style={{position: "fixed", padding: "3rem", width: "100%", backgroundColor: colors.primary}}>
                <img src={logo} style={{width: "18rem"}}></img>
            </div>
            <div>
                <div style={{width: "100%", transform: "translateY(50%) skewY(-7deg)"}}>
                    <div style={{backgroundColor: colors.secondary, width: "100%", paddingTop: "32rem"}}>
                    </div>
                </div>
                <div style={{height: "100vh", backgroundColor: colors.secondary, transform: "translateY(0%)", paddingLeft: "5rem", paddingRight: "5rem"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {Array.from(Array(Math.ceil(problems.length / BOX_PER_ROW))).map((_, i) => {
                            return (
                                <div key={i} style={{display: "flex", flexDirection: "row", marginBottom: "2rem"}}>
                                    {problems.slice(BOX_PER_ROW * i, BOX_PER_ROW * (i + 1)).map((problem, j) => {
                                        return (
                                            <div style={{marginLeft: "2rem"}}>
                                                <ProblemBox key={`pb-${i}-${j}`} title={problem.title}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
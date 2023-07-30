import React from 'react'
import logo from "../assets/logo.png";
import colors from '../constants/colors';

function NavBar({ fixed }) {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", color: colors.secondary, padding: "3rem", backgroundColor: colors.primary, position: fixed ? "fixed" : "inherit"}}>
            <a href="/"><img src={logo} style={{width: "18rem"}}></img></a>
        </div>
    )
}

export default NavBar

import { Link } from "react-router-dom";
import { headerData } from "./data";
import './style.css'
import { useState } from "react";

const Header = () => {
    return <div className="nav"> 
        <h1>MosMaster</h1>
        <div className="navlinks">
        {headerData.map(({title, path} )=> (
            
            <Link to={path}>{title}</Link>
            
        ))}
        </div>
    </div>
}

export default Header
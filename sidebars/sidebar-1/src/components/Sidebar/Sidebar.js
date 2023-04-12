import React, { useState } from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'


export const Sidebar = () => {

    const sidebar = document.getElementById("sidebar")
    const [icon,setIcon] = useState(false)

    const handleIcon = ()=>{
        if(icon === true){
            setIcon(false)
            sidebar.style.width = "54px"
        }else{
            setIcon(true)
            sidebar.style.width = "260px"
        }
    }
    return (
        <aside className='sidebar' id='sidebar'>
            <button className='btn'>
                <span className="material-symbols-outlined" onClick={handleIcon}>{(icon === false) ? "menu" : "close"}</span>
                <span>Menu</span>
            </button>
            <Link to={"/generator"} className='btn'>
                <span className="material-symbols-outlined">home</span>
                <span>JSON Generator</span>
            </Link>
            <Link to={"/settings"} className='btn'>
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
            </Link>
            <Link to={"/favorite"} className='btn'>
                <span className="material-symbols-outlined">favorite</span>
                <span>Favorite</span>
            </Link>
            <Link to={"/ratings"} className='btn'>
                <span className="material-symbols-outlined">star</span>
                <span>Ratings</span>
            </Link>
        </aside>
    )
}

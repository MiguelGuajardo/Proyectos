import React, { useState } from 'react'
import "./sidebar.css"

export const Sidebar = () => {

    const [dropdownTools, setDropdownTools] = useState(false)
    const [dropdownSettings, setDropdownSettings] = useState(false)
    const [menu,setMenu] = useState(false)

    const handleMenu = ()=>{
        if(menu === true){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }

    const abrirCerrarDropdownTools = ()=>{
        setDropdownTools(!dropdownTools)
    }
    const abrirCerrarDropdownSettings = ()=>{
        setDropdownSettings(!dropdownSettings)
    }
    const expandMore = (
        <span className="material-symbols-outlined expand">expand_more</span>
    )
    
    const expandLess = (
        <span className="material-symbols-outlined expand">expand_less</span>
    )
    
    return (
        <aside className='sidebar' id='sidebar' style={{width: (menu === false) ? "54px" : "260px"}}>
            <header id='header' onClick={handleMenu}>
                <span className="material-symbols-outlined">flash_on</span>
            </header>
            {(menu === true) ?
            (
                <>
            <button>
                <span className="material-symbols-outlined">home</span>
                <span>Home</span>
            </button>
            <button onClick={abrirCerrarDropdownTools}>
                <span className="material-symbols-outlined">build</span>
                <span>Tools</span>
                {(dropdownTools === false) ? expandMore : expandLess}
            </button>
                {(dropdownTools) ?
                <ul>
                    <li className='link'>Documents</li>
                    <li className='link'>Editor</li>
                    <li className='link'>Themes</li>
                    </ul>: ""}
            <button onClick={abrirCerrarDropdownSettings}>
                <span className="material-symbols-outlined">settings</span>
                <span>Settings</span>
                {(dropdownSettings === false) ? expandMore : expandLess}
            </button>
                {(dropdownSettings) ?
                <ul>
                    <li className='link'>Display</li>
                    <li className='link'>Audio</li>
                    <li className='link'>Interface</li>
                    <li className='link'>Accessibility</li>
                </ul>: ""}
            <button>
                <span className="material-symbols-outlined">account_circle</span>
                <span>Profile</span>
            </button>
            <button>
                <span className="material-symbols-outlined">logout</span>
                <span>Sign Out</span>
            </button>
            </>) : ""}
        </aside>
        )
    }

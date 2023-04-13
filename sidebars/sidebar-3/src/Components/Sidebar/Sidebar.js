import React, {useState} from 'react'
import {Links} from '../../Data/data'
import { Item } from '../Item/Item'
import './Sidebar.css'

export const Sidebar = () => {
    const [open,setOpen] = useState(false)

    const handleOpen = ()=>{
        setOpen(!open)
    }

    return (
        <div className={open ? "sidebarOpen" : "sidebar"}>
                <span className="material-symbols-outlined hamburger" onClick={handleOpen}>menu</span>
                <div className='linksContainer'>
                    {Links.map(({text,to,icon},i)=><Item key={i} to={to} text={text} icon={icon} open={open}>{text}</Item>)}
                </div>
        </div>
    )
}

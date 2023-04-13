import React from 'react'
import {NavLink} from 'react-router-dom'
import './Item.css'

export const Item = ({text,to,icon,open}) => {
    return (
        <NavLink to={to} className={open ? "linkOpen" : "normal"}>
            <div>{icon}</div>
            {open ? <p>{text}</p>: null}
        </NavLink>
    )
}

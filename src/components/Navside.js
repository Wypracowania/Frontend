import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import '../styles/navside.scss'; // assuming a styles directory under src/

const Navside = () => 
{
    return (
        <nav className="navside">
            <ul>
                <Link exact to="/" className="logo">Logo</Link>
                <NavLink to="/newOrder" >
                    <span>Nowe zamówienie</span>
                </NavLink>
                <NavLink to="/allOrders" activeClassName="navside-active">
                    <span>Moje zamówienia</span>
                </NavLink>
                <NavLink to="/help" activeClassName="navside_active">
                    <span>Pomoc</span>
                </NavLink>
                <NavLink to="/settings" activeClassName="navside_active">
                    <span>Ustawienia</span> 
                </NavLink>
                <NavLink to="/logout">
                    <span>Logout</span> 
                </NavLink>
            </ul>
        </nav> 
        )
    }
export default Navside

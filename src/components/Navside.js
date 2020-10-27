import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCog,
    faSignOutAlt,
    faQuestion,
    faPlus,
    faThLarge
     } from '@fortawesome/free-solid-svg-icons'
import '../styles/navside.scss'; // assuming a styles directory under src/

const Navside = () => (
    <nav className="navside">
        <ul>
             <Link exact to="/" className="navside__logo">
             <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.521186 13.2009C2.45095 5.44456 9.41609 0 17.4089 0C25.4017 0 32.3668 5.44456 34.2966 13.2009H32.7712C30.1979 13.163 27.6774 13.9321 25.5636 15.4001C25.4416 15.4884 25.3142 15.5691 25.1822 15.6416H25.0042C24.8722 15.5691 24.7449 15.4884 24.6229 15.4001C20.2608 12.4668 14.557 12.4668 10.1949 15.4001C10.0729 15.4884 9.94556 15.5691 9.81356 15.6416H9.63559C9.50359 15.5691 9.37623 15.4884 9.25424 15.4001C7.14042 13.9321 4.61989 13.163 2.04661 13.2009H0.521186ZM30.0254 21.1713C30.8085 20.5614 31.779 20.2424 32.7712 20.2687H34.8178V16.1882H32.7712C31.0236 16.1671 29.3159 16.711 27.9025 17.7391C26.2699 18.9427 24.0437 18.9427 22.411 17.7391C19.4428 15.6728 15.5021 15.6728 12.5339 17.7391C10.9013 18.9427 8.67502 18.9427 7.04237 17.7391C5.61152 16.6979 3.8794 16.1532 2.11017 16.1882H0V20.2687H2.04661C3.03878 20.2424 4.00931 20.5614 4.79237 21.1713C7.75544 23.239 11.6937 23.239 14.6568 21.1713C15.4408 20.5633 16.4107 20.2445 17.4025 20.2687C18.395 20.2403 19.3663 20.5595 20.1483 21.1713C23.1165 23.2375 27.0572 23.2375 30.0254 21.1713ZM32.7712 27.5653C31.779 27.539 30.8085 27.858 30.0254 28.4679C27.0572 30.5341 23.1165 30.5341 20.1483 28.4679C19.3663 27.8561 18.395 27.5369 17.4025 27.5653C16.4107 27.5411 15.4408 27.8599 14.6568 28.4679C11.6937 30.5356 7.75544 30.5356 4.79237 28.4679C4.00931 27.858 3.03878 27.539 2.04661 27.5653H0V23.4848H2.11017C3.8794 23.4498 5.61152 23.9945 7.04237 25.0357C8.67502 26.2393 10.9013 26.2393 12.5339 25.0357C15.5021 22.9694 19.4428 22.9694 22.411 25.0357C24.0437 26.2393 26.2699 26.2393 27.9025 25.0357C29.3159 24.0076 31.0236 23.4637 32.7712 23.4848H34.8178V27.5653H32.7712Z" fill="#FFD2DD"/>
             </svg>
             </Link>
            <NavLink to="/newOrder" className="navside__link" activeClassName="navside-active" >
                <span> <FontAwesomeIcon icon={faPlus} />Nowe zamówienie</span>
            </NavLink>
            <NavLink to="/allOrders" className="navside__link" activeClassName="navside-active">
                <span><FontAwesomeIcon icon={faThLarge} />Moje zamówienia</span>
            </NavLink>
            <NavLink to="/help" className="navside__link" activeClassName="navside_active">
                <span> <FontAwesomeIcon icon={faQuestion} />Pomoc</span>
            </NavLink>
            <NavLink to="/settings" className="navside__link" activeClassName="navside_active">
                <span> <FontAwesomeIcon icon={faCog} />Ustawienia</span> 
            </NavLink>
            <NavLink to="/logout" className="navside__link">
                <span><FontAwesomeIcon icon={faSignOutAlt} />Logout</span> 
            </NavLink>
        </ul>
    </nav> 
)
export default Navside

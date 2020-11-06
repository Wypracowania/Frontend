import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'
import '../styles/components/newOrderBtn.scss'

const NewOrderButton = () => {
    return (
        <button className="new-order-button" type="button">
            <NavLink to="/noweZamowienie">
            <FontAwesomeIcon icon={faPlusCircle} className="icon"/>
                <p>Nowe zamówienie</p>
            </NavLink>
        </button>
    )
}

export default NewOrderButton
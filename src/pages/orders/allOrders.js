import React, { useEffect, useState } from 'react';
import { FETCH_ORDERS_URL } from 'globalVariables';
import AuthenticationWrapper from '../authentication/Authentication';
import "../../styles/allOrders.scss";
import UserOrderList from '../../components/UserOrderList'
import NewOrderButton from '../../components/NewOrderBtn'


const AllOrders = () => {
  const [currentOrders, setCurrentOrders] = useState([]); // Aktualne zamówienia
  const [loaded, isLoaded] = useState(false)
  const [listProps, setListProps] = useState({}) // Propsy przekazane do komponentu wyświetlającego
  const [button, selectButton] = useState(0) // Decyduje którą klasę nałożyć po wcisnieciu przycisku

  // Pobieranie aktualnych zamówień
  function getCurrentOrders() {
    fetch(FETCH_ORDERS_URL, {
      Allow: 'OPTIONS',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then( response => response.json() )
    .then( response  => {
      isLoaded(true);
      setCurrentOrders(response);
    })
  }


  // Funkcja do wyświetlania odpowiedniej zawartości po wcisnięciu przycisku
  function switchList(param) {
    let props = {}

    switch (param) {
      case 0:
        props = {
          message: "Nie masz żadnych aktualnych zamówień"
        }
        break;
      case 1:
        props = {
          message: "Nie masz żadnych ukończonych zamówień"
        }
        break;
      default:
        props = {
          message: "Nie masz żadnych aktualnych zamówień"
        }
        break;
    }

    setListProps(props)
    selectButton(param)
  }

  useEffect(() => {
    if(!loaded) {
      getCurrentOrders(); // Pobieramy zamówienia tylko gdy wcześniej nie były załadowane
    }
    switchList(0)
  }, [])


  return (
    <AuthenticationWrapper>
      <div className="allOrders">
        <div className="ao-header">
          <h2>Moje zamówienia</h2>
          <NewOrderButton />
        </div>
        <div className="ao-switch">
          <div>
            <button 
              onClick={ () => switchList(0) } 
              className={ button===0 ? "active ao-switch-btn" : "ao-switch-btn" }
              type="button"
              >Wszystkie zamówienia
            </button>
          </div>
          <div>
            <button 
              onClick={ () => switchList(1) } 
              className={ button===1 ? "active ao-switch-btn" : "ao-switch-btn" }
              type="button"
              >Ukończone zamówienia
            </button>
          </div>
        </div>
        <UserOrderList key={ button } listProps={ listProps } />
      </div>
    </AuthenticationWrapper>
  );
};

export default AllOrders;

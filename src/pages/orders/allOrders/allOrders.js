import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FETCH_ORDERS_URL } from 'globalVariables';
import Headline from 'components/Header/Headline';
import HeadButton from 'components/HeadButton/HeadButton';
import { ReactComponent as NewOrderIcon } from 'assets/navside/newOrder.svg';
import PageWindow from 'components/PageWindow/PageWindow';
import { Link, Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import * as MultiView from 'components/MultiView/MultiView';

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledNewOrderButton = styled(HeadButton)`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;

    path {
      fill: transparent;
    }
  }

  & > span {
    position: relative;
    top: 1px;
  }
`;

const NewOrderButton = () => {
  return (
    <Link to="/newOrder">
      <StyledNewOrderButton>
        <NewOrderIcon />
        <span>Nowe zamówienie</span>
      </StyledNewOrderButton>
    </Link>
  );
};

const AllOrdersPageWindow = styled(PageWindow)`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > button {
      margin-top: 30px;
    }
  }
`;

// const StyledNavPageView = styled.nav`
//   margin-top: 20px;

//   & > ul {
//     display: flex;
//     padding: 0;
//     list-style: none;
//     border-bottom: solid 1px gray;

//     & > li {
//       transform: translateY(2px);

//       &:not(:first-child) {
//         margin-left: 200px;
//       }

//       & > button {
//         border: none;
//         outline: none;
//         background: transparent;
//         cursor: pointer;
//         padding-bottom: 20px;
//         border-bottom: solid 3px ${({ theme }) => theme.primaryDark};
//       }
//     }
//   }
// `;

// const NavPageView = () => {
//   return (
//     <StyledNavPageView>
//       <ul>
//         <li>
//           <button type="button">Moje zamówienia</button>
//         </li>
//         <li>
//           <button type="button">Szkice</button>
//         </li>
//         <li>
//           <button type="button">Zakończone zamówienia</button>
//         </li>
//       </ul>
//     </StyledNavPageView>
//   );
// };

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(FETCH_ORDERS_URL)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setOrders(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const MyOrdersView = ({ orders }) => {
    if (orders)
      return (
        <ul>
          {orders.map(({ topic }) => (
            <li>{topic}</li>
          ))}
        </ul>
      );
    return (
      <div>
        <Headline>Brak zamówień</Headline>
        <p>Nie masz żadnych zamówień</p>
        <NewOrderButton />
      </div>
    );

    // return (
    //   <div>
    //     <Headline>Brak zamówień</Headline>
    //     <p>Nie masz żadnych zamówień</p>
    //     <NewOrderButton />
    //   </div>
    // );
  };

  const SketchesView = () => {
    return (
      <div>
        <Headline>Brak szkiców</Headline>
        <p>Nie masz żadnych szkiców</p>
        <NewOrderButton />
      </div>
    );
  };

  const FinishedOrdersView = () => {
    return (
      <div>
        <Headline>Brak zakończonych zamówień</Headline>
        <p>Nie masz żadnych zakończonych zamówień</p>
        <NewOrderButton />
      </div>
    );
  };

  return (
    <>
      <MultiView.Wizard>
        <StyledHead>
          <MultiView.DHeadline headline="Moje zamówienia">
            Moje zamówienia
          </MultiView.DHeadline>
          <MultiView.DHeadline headline="Szkice">Szkice</MultiView.DHeadline>
          <MultiView.DHeadline headline="Zakończone zamówienia">
            Zakończone zamówienia
          </MultiView.DHeadline>
          <NewOrderButton />
        </StyledHead>
        {/* <NavPageView /> */}
        <MultiView.Controls />
        <AllOrdersPageWindow>
          <MultiView.View viewIndex={1}>
            <MyOrdersView orders={orders} />
          </MultiView.View>
          <MultiView.View viewIndex={2}>
            <SketchesView />
          </MultiView.View>
          <MultiView.View viewIndex={3}>
            <FinishedOrdersView />
          </MultiView.View>
        </AllOrdersPageWindow>
      </MultiView.Wizard>
    </>
  );

  //   return orders.map(({ topic, category, document }) => (
  //     <span>
  //       {topic}, {category}, {document} <br />
  //     </span>
  //   ));
};

export default AllOrders;

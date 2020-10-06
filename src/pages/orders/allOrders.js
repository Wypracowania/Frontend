import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FETCH_ORDERS_URL } from 'globalVariables';
import Headline from 'components/Header/Headline';
import HeadButton from 'components/HeadButton/HeadButton';
import { ReactComponent as NewOrderIcon } from 'assets/navside/newOrder.svg';
import PageWindow from 'components/PageWindow/PageWindow';
import { Link, Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

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

const LatestOrders = () => {
  return (
    <AllOrdersPageWindow>
      <div>
        <Headline>Brak zamówień</Headline>
        <p>Nie masz żadnych zamówień</p>
        <NewOrderButton />
      </div>
    </AllOrdersPageWindow>
  );
};

const ScriptOrders = () => {
  return <div>asd</div>;
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

  return (
    <>
      <BrowserRouter>
        <StyledHead>
          <Headline>Moje zamówienia</Headline>
          <NewOrderButton />
        </StyledHead>
        <NavLink to="/allOrders/latest">all</NavLink>
        <NavLink to="/allOrders/scripts">scripts</NavLink>
        <NavLink to="/finished">finished</NavLink>
        <Switch>
          <Route exact path="/allOrders/latest" component={LatestOrders} />
          <Route path="/allOrders/scripts" component={ScriptOrders} />
          {/* <Route path="/scripts" component={} />
          <Route path="/finished" component={} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );

  //   return orders.map(({ topic, category, document }) => (
  //     <span>
  //       {topic}, {category}, {document} <br />
  //     </span>
  //   ));
};

export default AllOrders;

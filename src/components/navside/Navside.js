import Logo from 'components/logo/Logo';
import ProfileTab from 'components/profileTab/ProfileTab';
import React from 'react';
import styled from 'styled-components';
import NavsideButton from './navsideButton/NavsideButton';

import { ReactComponent as HelpIcon } from 'assets/navside/help.svg';
import { ReactComponent as LoanIcon } from 'assets/navside/loan.svg';
import { ReactComponent as MyOrdersIcon } from 'assets/navside/myOrders.svg';
import { ReactComponent as NewOrderIcon } from 'assets/navside/newOrder.svg';
import { ReactComponent as SettingsIcon } from 'assets/navside/settings.svg';
import { ReactComponent as LogoutIcon } from 'assets/navside/logout.svg';
import { NavLink, Link } from 'react-router-dom';

const StyledNavside = styled.nav`
  position: fixed;
  width: 215px;
  height: 100vh;
  left: 0;
  background-color: white;

  & > .profile-tab {
    font-size: 1.5rem;
  }
`;

const StyledNavsideButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 175px);

  & > a {
    text-decoration: none;
    color: inherit;
  }

  & > a:last-child {
    margin-top: auto;

    & > div {
      position: relative;

      &:before {
        content: '';
        width: calc(100%);
        position: absolute;
        top: 0;
        left: 0;
        border-top: solid 1px black;
      }
    }
  }
`;

const Navside = () => {
  return (
    <StyledNavside>
      <Link exact to="/">
        <Logo />
      </Link>
      <ProfileTab />
      <StyledNavsideButtonsWrapper>
        <NavLink to="/newOrder" activeClassName="navside__active__button">
          <NavsideButton>
            <NewOrderIcon />
            <span>Nowe zamówienie</span>
          </NavsideButton>
        </NavLink>
        <NavLink
          to="/allOrders/latest"
          activeClassName="navside__active__button"
        >
          <NavsideButton>
            <MyOrdersIcon />
            <span>Moje zamówienia</span>
          </NavsideButton>
        </NavLink>
        <NavLink to="/loan" activeClassName="navside__active__button">
          <NavsideButton>
            <LoanIcon />
            <span>Kredyt</span>
          </NavsideButton>
        </NavLink>
        <NavLink to="/help" activeClassName="navside__active__button">
          <NavsideButton>
            <HelpIcon />
            <span>Pomoc</span>
          </NavsideButton>
        </NavLink>
        <NavLink to="/settings" activeClassName="navside__active__button">
          <NavsideButton>
            <SettingsIcon />
            <span>Ustawienia</span>
          </NavsideButton>
        </NavLink>
        <NavLink to="/logout">
          <NavsideButton>
            <LogoutIcon />
            <span>Logout</span>
          </NavsideButton>
        </NavLink>
      </StyledNavsideButtonsWrapper>
    </StyledNavside>
  );
};

export default Navside;

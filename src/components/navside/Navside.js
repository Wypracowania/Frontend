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
  padding: 0 25px;
`;

const Navside = () => {
  return (
    <StyledNavside>
      <Logo />
      <ProfileTab />
      <StyledNavsideButtonsWrapper>
        <NavsideButton>
          <NewOrderIcon />
          <span>Nowe zamówienie</span>
        </NavsideButton>
        <NavsideButton>
          <MyOrdersIcon />
          <span>Moje zamówienia</span>
        </NavsideButton>
        <NavsideButton>
          <LoanIcon />
          <span>Kredyt</span>
        </NavsideButton>
        <NavsideButton>
          <HelpIcon />
          <span>Pomoc</span>
        </NavsideButton>
        <NavsideButton>
          <SettingsIcon />
          <span>Ustawienia</span>
        </NavsideButton>
      </StyledNavsideButtonsWrapper>
    </StyledNavside>
  );
};

export default Navside;

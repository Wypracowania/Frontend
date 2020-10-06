import React from 'react';
import styled from 'styled-components';

const StyledNavsideButton = styled.div`
  width: 100%;
  padding: 20px 25px;
  display: flex;
  align-items: center;

  /* &:nth-child(1),
  &:nth-child(4) {
    path {
      fill: transparent;
    }
  } */

  & > span {
    margin-left: 10px;
  }
`;

const NavsideButton = ({ children }) => {
  return <StyledNavsideButton>{children}</StyledNavsideButton>;
};

export default NavsideButton;

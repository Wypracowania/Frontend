import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from 'assets/images/logo.svg';

const StyledLogoContainer = styled.header`
  box-sizing: content-box;
  position: relative;
  padding: 15px 28px;

  & > svg {
    transform: scale(0.8);

    & > path {
      fill: #d3d3d3;
      fill-opacity: 1;
    }
  }

  &::after {
    content: '';
    width: calc(100%);
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: solid 1px black;
  }
`;

const Logo = () => (
  <StyledLogoContainer>
    <LogoImage />
  </StyledLogoContainer>
);

export default Logo;

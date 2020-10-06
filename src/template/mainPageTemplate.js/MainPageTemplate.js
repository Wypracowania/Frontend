import React from 'react';
import styled from 'styled-components';

const StyledMainPageTemplate = styled.main`
  position: absolute;
  left: 215px;
  background-color: #f4f6fc;
  height: 100vh;
  width: calc(100vw - 215px);
  padding: 82px 108px;
`;

const MainPageTemplate = ({ children }) => {
  return <StyledMainPageTemplate>{children}</StyledMainPageTemplate>;
};

export default MainPageTemplate;

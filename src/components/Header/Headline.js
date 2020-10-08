import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.header`
  font-size: 2.8rem;
`;

const Headline = ({ children }) => <StyledHeadline>{children}</StyledHeadline>;

export default Headline;

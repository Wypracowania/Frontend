import styled from 'styled-components';

const HeadButton = styled.button`
  font-size: 1.5rem;
  padding: 6px 10px;
  background-color: #676c7d;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
`;

// const HeadButton = ({ children }) => (
//   <StyledHeadButton type="button">{children}</StyledHeadButton>
// );

export default HeadButton;

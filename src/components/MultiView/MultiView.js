import Headline from 'components/Header/Headline';
import React, { createContext, useState, useContext } from 'react';
import styled from 'styled-components';

const WizardContext = createContext({
  currentPage: 1,
  changePage: () => {},
  currentHeadline: 'Moje zamówienia',
  changeHeadline: () => {},
});

const View = ({ children, viewIndex }) => {
  const { currentPage } = useContext(WizardContext);
  return currentPage === viewIndex ? children : null;
};

const StyledNavPageView = styled.nav`
  margin-top: 20px;

  & > ul {
    display: flex;
    padding: 0;
    list-style: none;
    border-bottom: solid 1px lightgray;

    & > li {
      transform: translateY(2px);

      &:nth-child(${({ currentPage }) => currentPage}) {
        & button {
          border-bottom: solid 3px ${({ theme }) => theme.primaryDark};
        }
      }

      &:not(:first-child) {
        margin-left: 200px;
      }

      & > button {
        border: none;
        outline: none;
        background: transparent;
        cursor: pointer;
        padding-bottom: 20px;
      }
    }
  }
`;

const DHeadline = ({ children, headline }) => {
  const { currentHeadline } = useContext(WizardContext);

  return currentHeadline === headline ? <Headline>{children}</Headline> : null;
};

const Controls = () => {
  const { changePage, changeHeadline, currentPage } = useContext(WizardContext);

  return (
    <StyledNavPageView currentPage={currentPage}>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              changePage(1);
              changeHeadline('Moje zamówienia');
            }}
          >
            Moje zamówienia
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              changePage(2);
              changeHeadline('Szkice');
            }}
          >
            Szkice
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              changePage(3);
              changeHeadline('Zakończone zamówienia');
            }}
          >
            Zakończone zamówienia
          </button>
        </li>
      </ul>
    </StyledNavPageView>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentHeadline, setCurrentHeadline] = useState('Moje zamówienia');

  const changePage = (newPageIndex) => {
    setCurrentPage(newPageIndex);
  };

  const changeHeadline = (newHeadline) => {
    setCurrentHeadline(newHeadline);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        currentHeadline,
        changeHeadline,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { View, Controls, Wizard, DHeadline };

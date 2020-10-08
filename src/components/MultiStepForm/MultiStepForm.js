import HeadButton from 'components/HeadButton/HeadButton';
import React, { createContext, useState, useContext } from 'react';
import styled from 'styled-components';

const WizardContext = createContext({
  currentPage: 1,
  changePage: () => {},
});

const View = ({ children, viewIndex }) => {
  const { currentPage } = useContext(WizardContext);
  return currentPage === viewIndex ? children : null;
};

const StyledNavForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;

  & > button {
    padding: 10px 30px;
  }

  & > button:first-child {
    background-color: #e5e6ea;
    color: #676c7d;
    border: solid 1px #676c7d;
  }
`;

const StyledPogressBar = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    top: 16px;
    width: 100%;
    outline: solid 2px ${({ theme }) => theme.primaryDark};
    z-index: 0;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 2px solid rgba(46, 91, 255, 0.15);
    font-size: 1.5rem;
    border-radius: 16px;
    position: relative;
    z-index: 2;
    background-color: white;

    &:after {
      white-space: nowrap;
      position: absolute;
      bottom: -35px;
    }

    &:nth-child(1):after {
      content: 'Szczegóły zamówienia';
    }

    &:nth-child(2):after {
      content: 'Instrukcje';
    }

    &:nth-child(3):after {
      content: 'Dodaj pliki';
    }

    &${({ currentPage }) => {
      switch (currentPage) {
        case 1:
          return ':first-child';
        case 2:
          return ':not(:last-child)';
        case 3:
          return '';
        default:
          break;
      }
    }} {
      background-color: ${({ theme }) => theme.primaryDark};
      color: white;

      &:after {
        color: ${({ theme }) => theme.primaryDark};
      }
  }
`;

const ProgressBar = () => {
  const { currentPage } = useContext(WizardContext);

  return (
    <StyledPogressBar currentPage={currentPage}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </StyledPogressBar>
  );
};

const Controls = () => {
  const { changePage, currentPage } = useContext(WizardContext);

  return (
    <StyledNavForm currentPage={currentPage}>
      <HeadButton
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        Poprzedni krok
      </HeadButton>
      <HeadButton
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        Kontynuuj
      </HeadButton>
    </StyledNavForm>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (newPageIndex) => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { View, Controls, Wizard, ProgressBar };

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Rubik', sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    .navside__active__button {
        & > div {
        background-color: #f4f6fc;

        }
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    body {
        margin: 0px;
        padding: 10px;
        background-color: #eaedec;
        font-family: sans-serif;
        color: #2a3d4d;
    }
    .title {
        text-transform: capitalize;
        padding: 25px 20px 0px;
        font-size: 24px;
        font-weight: bold;
    }
    .content-title {
        text-transform: capitalize;
        padding: 25px 20px 0px;
        font-size: 20px;
        font-weight: bold;
    }
`;

export { Global };

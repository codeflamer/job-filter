import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --mainBg:hsl(180, 52%, 96%);
        --textColor:hsl(180, 29%, 50%);
        --darkBg:hsl(180, 29%, 50%);
        --darkOne:hsl(180, 14%, 20%);
        --blueOne:hsl(180, 29%, 50%);
    }   
    *{
        box-sizing:border-box;
    }
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    background: var(--mainBg);
    font-family: 'Spartan', sans-serif;
    font-size:15px;
    color:var(--textColor);
    @media(max-width:768px){
      font-size:13px;
    }
  }
  a{
      color:var(--text-color);
      text-decoration:none;
      &:hover{
        text-decoration:underline;
      }
  }
`;
 
export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Changa:wght@200;400;700&display=swap');
 *{
   box-sizing: border-box;
 }
 
  body , html{
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #F1FFFA;
    
    font-family:'Changa', sans-serif;
  }
  
`;

export default GlobalStyle;

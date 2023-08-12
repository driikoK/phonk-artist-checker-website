import { createGlobalStyle, styled } from 'styled-components';
  
export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0px; 
    padding: 100px 0px 70px 0px;
    background-image: url("/background.jpg");
    background-attachment: fixed;
    background-size: cover;  
    background-repeat: no-repeat;
    background-position: center center;
    font-size: 15px;
    @media (min-width: 1025px){
      font-size: 18px;
    }
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
  }
`;

export const TextContainer = styled.div`
    background: #000000;
    border: 3px solid #8E24AA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: white;
    padding: 20px;
    padding-bottom: 30px;
    width: 250px;
    @media (min-width: 350px){
        width: 300px;
    }
    @media (min-width: 600px){
        width: 450px;
    }
    @media (min-width: 1025px){
        width: 500px;
    }
    justify-content: center;
    text-align: justify;
    margin: 50px auto 0px auto;
    a{
      background: #fff;
      border: 3px solid #3A0046;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      padding: 10px;
      text-decoration: none;
      color: #8E24AA;
      font-size: 18px;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #000000;
        color: #fff;
        border: 2px solid #8E24AA
      }
    }
`;
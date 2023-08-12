import styled from "styled-components";

export const HeaderContainer = styled.div`
background: black;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
padding: 0px;
@media (max-width: 450px){
    padding: 0px 0px 0px 20px;
  }
width: 100%;
height: 90px;
img {
    height: 70px;
}
`;

export const LogoText = styled.h1`
text-align: center;
font-family: 'Rubik Wet Paint', cursive;
font-style: normal;
font-weight: 300;
font-size: 30px;
line-height: 30px;
text-align: center;
letter-spacing: -0.3px;
margin-left: 10px;
color: #FFFFFF;
-webkit-text-stroke: 2px #8E24AA;
`;
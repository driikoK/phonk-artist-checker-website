import styled from "styled-components";

export const FormContainer = styled.div`
background: black;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
padding: 10px;
width: 100%;
height: 40px;
@media (min-width: 800px){
    height: 50px;
}
`;

export const StyledInput = styled.input`
padding: 10px;
border: 3px solid #8E24AA;
outline: none;
border-radius: 5px;
font-size: 15px;
color: #8E24AA;
width: 250px;
@media (min-width: 800px){
    width: 350px;
}
@media (min-width: 1025px){
    width: 500px;
    font-size: 18px;
}
`;

export const StyledButton = styled.button`
background-color: transparent;
border: none;
padding: 10px;
img {
    width: 40px;
    height: 40px;
}
`;

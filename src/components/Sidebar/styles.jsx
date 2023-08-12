import styled from "styled-components";


export const StyledSidebar = styled.div`
    background-color: #000000;
    height: 90px;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const Menubars = styled.div`
    margin-left: 2rem;
    @media (max-width: 600px){
    margin-left: 1rem;
    }
    font-size: 2rem;
    background: none;
    color: #000;
`;

export const Nav = styled.nav`
  &.nav-menu {
    background-color: #000000;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }
  
  &.nav-menu.active {
    left: 0;
    transition: 450ms;
  }

  &.navbar-toggle {
    background-color: #000000;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 12001;
  }

  ul{
    padding: 0px;
    padding-top: 60px;
    width: 100%;
  }
`;

export const NavText = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;

  a {
    text-decoration: none;
    color: #8E24AA;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #000000;
      color: #fff;
    }
    span {
     margin-left: 16px;
    }
  }
`;





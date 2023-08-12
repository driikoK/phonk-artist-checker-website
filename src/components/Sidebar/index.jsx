import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Header from "../Header";
import { StyledSidebar, Menubars, Nav, NavText } from "./styles";

function Sidebar({showSidebar, sidebar}) {

  return (
    <div> 
    <IconContext.Provider value={{ color: "purple" }}>
        <StyledSidebar>
            <Menubars>
          <Link to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          </Menubars>
        </StyledSidebar><Link to="/"><Header/></Link>
        <Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <NavText key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </NavText>
              );
            })}
          </ul>
        </Nav>
    </IconContext.Provider>
    </div> 
  );
}

export default Sidebar;
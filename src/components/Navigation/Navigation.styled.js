import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavLinkStyled = styled(NavLink)`
  padding: 8px 22px;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 18px;
    font-weight: 700;
  color: rgb(3, 3, 96);

  &.active {
    background-color: rgb(235, 232, 240);
  }
`;


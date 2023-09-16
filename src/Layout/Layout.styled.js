import styled from "styled-components";
import { NavLink } from 'react-router-dom'; 

export const Header = styled.header`
/* padding-right: 100px; */
    display: flex;
    align-items: right;
    justify-content: space-between;
    gap: 20px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;
export const List = styled.ul`
    display: flex;
    list-style: none;
`; 

export const StyledLink = styled(NavLink)`
    color: #696969;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: 700;
  
    &:hover,
    &:focus {
    color: #D2691E;
    scale: 1.03;
  }

    &.active {
    color: #3470FF;
    }
`;


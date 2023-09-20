import styled from "styled-components";
import { NavLink } from 'react-router-dom'; 

export const Header = styled.header`
    display: flex;
    align-items: right;
    justify-content: space-between;
    gap: 20px;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;
export const List = styled.ul`
    display: flex;
    padding: 20px;
`; 

export const StyledLink = styled(NavLink)`
    color: #778899;
    font-size: large;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: 700;
  
    &:hover,
    &:focus {
    color: var(--secondaryBGColor);
    scale: 1.03;
  }

    &.active {
    color: var(--buttonColor);
    }
`;


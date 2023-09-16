import styled from "styled-components";
import { Link } from 'react-router-dom';

// export const List = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     margin-top: 10px;
// `;
// export const ListLine = styled.ul`
//     border-top: 1px solid #505050;
//     list-style: none;
// `;

// export const Paragraph = styled.p`
//     display: block;
//     text-align: justify;
// `;

// export const Form = styled.form`
//     display: block;
//     margin-top: 50px;
// `;
// export const ItemCast = styled.ul`
//     display: block;
//     margin-top: 10px;
// `;
export const MainContainer = styled.div`
    padding: 0 20px;
    margin: 0 auto;
    max-width: 960px;
`;

export const StyledLink = styled(Link)`
    color: #3470FF;
    padding: 5px;
    display: block; 
   
  :hover {
    color: #0B44CD;
    }
`;

export const RentalButton = styled.a`
  display: inline-flex;
  width: 83px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #FFDAB9;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-decoration: none;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #D2691E;
  }
`;

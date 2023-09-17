import styled from "styled-components";

export const Title = styled.h1`
    display: block;
    margin: 20px;
    padding: 10px;
    font-weight: 700;
    color: #404040;

    span{
      font-size: 1.5em;
      background-color: #D2691E;
      color: #fff;
    }
`;
export const Image = styled.img`
    display: block;
    padding: 10px 0;
    width: 100%;
    border-radius: 40px;
    object-fit: cover;
`;

export const Description = styled.h3`
    display: block;
    margin: 20px;
    font-weight: 500;
    color: #404040;
    text-align: justify;
`;

export const BackHomeBtn = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  padding: 10px 20px;
  background: #d2691e;
  color: #ffffff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover,
  &:focus {
    background: #778899;
  }
`;
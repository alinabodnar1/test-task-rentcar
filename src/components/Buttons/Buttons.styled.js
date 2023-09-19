import styled from 'styled-components';

export const RentalCarHomePageBtn = styled.a`
  display: block;
  width: 83px;
  padding: 12px 50px;
  margin: 20px auto;
  border-radius: 12px;
  background-color: #d2691e;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43;
  text-decoration: none;
  outline: none;
  box-shadow: 0px 3.5px 3.5px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #778899;
  }
`;

export const RentalCarModalBtn = styled.a`
  display: block;
  width: 83px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470FF;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.43;
  text-decoration: none;
  outline: none;
  box-shadow: 0px 3.5px 3.5px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: #0B44CD;
  }
`;

export const LoadMoreButton = styled.button`
  width: 200px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  color: #3470FF;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0B44CD;
  }
`;
import styled from 'styled-components';

export const RentalCarHomePageBtn = styled.a`
  display: block;
  width: 83px;
  padding: 12px 50px;
  margin: 20px auto;
  border-radius: 12px;
  background-color: var(--secondaryBGColor);
  color: #ffffff;
  font-weight: 700;
  line-height: 1.43;
  text-decoration: none;
  outline: none;
  box-shadow: var(--boxShadow);
  transition: all 250ms var(--funcTransition);

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
  background-color: var(--buttonColor);
  color: #ffffff;
  font-weight: 700;
  line-height: 1.43;
  text-decoration: none;
  outline: none;
  box-shadow: var(--boxShadow);
  transition: all 250ms var(--funcTransition);

  &:hover,
  &:focus {
    background: var(--buttonHoverColor);
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  width: 200px;
  margin: 0 auto;
  margin-top: 28px;
  padding: 12px 0;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  background-color: transparent;
  color: var(--buttonColor);
  transition: all 250ms var(--funcTransition);

  &:hover {
    color: var(--buttonHoverColor);
  }
`;

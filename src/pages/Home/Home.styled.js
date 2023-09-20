import styled from 'styled-components';

export const Title = styled.h1`
  display: block;
  margin: 20px;
  padding: 10px;
  font-weight: 700;
  color: var(--titleColor);

  span {
    font-size: 1.5em;
    background-color: var(--secondaryBGColor);
    color: #ffffff;
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
  color: var(--titleColor);
  text-align: justify;
`;

export const BackHomeBtn = styled.button`
  position: absolute;
  top: 50px;
  left: 50px;
  padding: 10px 20px;
  background: var(--secondaryBGColor);
  color: #ffffff;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: var(--boxShadow);
  transition: all 250ms var(--funcTransition);

  &:hover,
  &:focus {
    background: #778899;
  }
`;

import styled from 'styled-components';

export const SearchbarContainer = styled.form`
  /* margin-top: 50px; */
  /* /* display: flex; */
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center; 
  padding: 30px 0px 80px;
  outline: 2px solid orange;
`;

export const InputsContainer = styled.div`
  width: 100%;
  /* display: flex;
  flex-wrap: wrap; */
  /* justify-content: center;
  align-items: flex-end; */
  /* gap: 18px; */
  position: relative;
  outline: 2px solid aqua;
`;

export const Label = styled.label`
font-size: 14px;
font-weight: 500;
line-height: 18px;
color: #8A8A89;
margin-bottom: 8px;
`;

export const ModelInput = styled.input`
  /* position: absolute;

  left: 240px;
  top: 40px; */
  background: #F7F7FB;
  padding: 14px 18px;
  color: #121417;
  border-radius: 14px;
font-family: Manrope;
font-size: 18px;
font-style: normal;
font-weight: 500;
  outline: none;
  border: none;
`;

export const SearchBtn = styled.button`
margin-left: 400px;
  padding: 10px 20px;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  border-radius: 12px;
  background: #3470FF;
  border: none;
  box-shadow: 0px 3.4px 3.4px 0px rgba(0, 0, 0, 0.25);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: #0B44CD;
  }
  `;
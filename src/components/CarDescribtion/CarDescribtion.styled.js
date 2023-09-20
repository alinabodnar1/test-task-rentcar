import styled from 'styled-components';

export const MadalWrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 24px;
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 24px;
`;

export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--secondaryTextColor);
  font-size: 16px;
  line-height: 24px;
`;

export const ModelBlue = styled.div`
  color: var(--buttonColor);
  font-size: 16px;
`;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  margin-bottom: 14px;
  gap: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--primaryTextColor);
`;

export const SecondaryCarText = styled.div`
  color: var(--primaryTextColor);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid var(--borderLineColor);
  padding-right: 5px;

  &:last-child {
    border-right: none;
  }
`;

export const Descriprion = styled.p`
  color: var(--secondaryTextColor);
  font-weight: 400;
  line-height: 20px;
`;

export const Accessories = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;
`;

export const AccessoriesTitle = styled.p`
  color: var(--secondaryTextColor);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const AccessoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--primaryTextColor);
  font-size: 12px;
  line-height: 18px;
  gap: 5px; 
`;

export const AccessoryListItem = styled.li`
  color: var(--primaryTextColor);
  font-size: 12px;
  line-height: 18px;
  border-right: 1px solid var(--borderLineColor);
  padding-right: 5px;

  &:last-child {
    border-right: none;
  }
`;

export const RentalTitle = styled.p`
  margin-bottom: 8px;
  color: var(--secondaryTextColor);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalInfo = styled.ul`
  width: 380px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const RentalItem = styled.li`
  padding: 7px 10px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;

  & span {
    color: var(--buttonColor);
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

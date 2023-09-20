import styled from 'styled-components';
import likeIconNormal from '../../images/normal.png';
import likeIconActive from '../../images/active.png';

export const CardItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  margin-bottom: 20px;
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
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
  width: 274px;
  gap: 3px;
`;

export const SecondaryCarText = styled.div`
  padding-right: 4px;
  color: var(--primaryTextColor);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid var(--primaryTextColor);

  &:last-child {
    border-right: none;
  }
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const LikeIconNormal = styled.div`
  background-image: url(${likeIconNormal});
  width: 18px;
  height: 18px;
`;

export const LikeIconActive = styled.div`
  background-image: url(${likeIconActive});
  width: 18px;
  height: 18px;
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: var(--buttonColor);
  outline: none;
  margin-top: 28px;
  box-shadow: var(--boxShadow);

  &:hover {
    background: var(--buttonHoverColor);
  }
`;

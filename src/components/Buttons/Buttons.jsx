import React from 'react';
import { LoadMoreButton } from '../Buttons/Buttons.styled';
import { RentalCarHomePageBtn, RentalCarModalBtn } from './Buttons.styled';

export const RentalCarHomePage = () => {
  return (
    <RentalCarHomePageBtn href="tel:+380730000000">
      Rental car
    </RentalCarHomePageBtn>
  );
};

export const RentalCarModal = () => {
  return (
    <RentalCarModalBtn href="tel:+380730000000">Rental car</RentalCarModalBtn>
  );
};

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <LoadMoreButton type="submit" onClick={onClick}>
      Load more
    </LoadMoreButton>
  );
};

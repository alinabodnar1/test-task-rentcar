import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import CarDescribtion from '../CarDescribtion/CarDescribtion';
import {
  minusToFavoriteList,
  plusToFavoriteList,
} from '../../redux/favoritesSlice';

import {
  CardItem,
  CardImg,
  LikeBtn,
  LikeIconNormal,
  LikeIconActive,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LearnMoreBtn,
} from './CarCard.styled';

export default function CarCard({ car }) {
  const { id } = car;
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);

  const followStatus = favorite.includes(id);

  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const cutDescription = (carDescription, numberForCut) =>
    carDescription.length >= numberForCut
      ? carDescription.slice(0, numberForCut) + '...'
      : carDescription;

  const cutCarModel = carModel => (carModel.length >= 8 ? '' : carModel);
  const cutModel = cutCarModel(car.model);

  const cutMake = cutDescription(car.make, 10);
  const cutType = cutDescription(car.type, 8);

  const oneFunctionality = car.functionalities[0];
  const cutFirstFunctionality = cutDescription(oneFunctionality, 18);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const incrementFavorite = () => {
    dispatch(plusToFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(minusToFavoriteList(id));
  };

  return (
    <CardItem>
      <CardImg src={car.img} alt={car.make} />
      <LikeBtn
        onClick={!followStatus ? incrementFavorite : decrementFavorite}
        type="button"
      >
        {!followStatus ? <LikeIconNormal /> : <LikeIconActive />}
      </LikeBtn>

      <MainInfo>
        <CarInfo>
          <CarText>
            {car.make}
            <span style={{ color: 'black' }}>,</span>
          </CarText>
          <ModelBlue>{cutModel}</ModelBlue>
          <CarText>{car.year}</CarText>
        </CarInfo>
        <CarText>{car.rentalPrice}</CarText>
      </MainInfo>
      <SecondaryInfo>
        <SecondaryCarText>{city}</SecondaryCarText>
        <SecondaryCarText>{country}</SecondaryCarText>
        <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
        <SecondaryCarText>{cutType}</SecondaryCarText>
        <SecondaryCarText>{cutMake}</SecondaryCarText>
        <SecondaryCarText>{car.id}</SecondaryCarText>
        <SecondaryCarText>{cutFirstFunctionality}</SecondaryCarText>
      </SecondaryInfo>
      <LearnMoreBtn onClick={toggleModal}>Learn more</LearnMoreBtn>
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <CarDescribtion car={car} city={city} country={country} />
        </Modal>
      )}
    </CardItem>
  );
}

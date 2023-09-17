import React from 'react';
import {  
  CardItem,
  CardImg,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  LikeBtn,
  HeartIcon,
  HeartIconBlue
  } from './CarCard.styled';

export default function CarCard({ car}) {

  const addressParts = car.address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const oneFunctionality = car.functionalities[0];
  const cutoneFunctionality = oneFunctionality.length >= 27 ? oneFunctionality.slice(0, 27) + '...' : oneFunctionality;


  return (
    <CardItem>
  
        <CardImg src={car.img} alt={car.make} />
        <LikeBtn
          // onClick={!followStatus ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {/* {!followStatus ? <HeartIcon /> : <HeartIconBlue />} */}
          <HeartIcon />
        </LikeBtn>
     
        <MainInfo>
          <CarInfo>
            <CarText>{car.make}</CarText>
            <ModelBlue>
              {car.model}
              <span style={{ color: 'black' }}>,</span>
            </ModelBlue>
            <CarText>{car.year}</CarText>
          </CarInfo>
          <CarText>{car.rentalPrice}</CarText>
        </MainInfo> 
        <SecondaryInfo>
          <SecondaryCarText>{city}</SecondaryCarText>
          <SecondaryCarText>{country}</SecondaryCarText>
          <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
          <SecondaryCarText>{car.type}</SecondaryCarText>
          <SecondaryCarText>{car.make}</SecondaryCarText>
          <SecondaryCarText>{car.id}</SecondaryCarText> 
          <SecondaryCarText>{cutoneFunctionality}</SecondaryCarText>
          </SecondaryInfo>
        {/* <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn> */}
        {/* {isModalOpen && (
          <Modal
            onClose={closeModal}
            key={id}
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        )} */}
     
    </CardItem>
  );
}

import React from 'react';
import { CardItem, 
  InfoWrapper,
  CardImg,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  } from './CarCard.styled';

export default function CarCard({ car
  // make,
  // model,
  // id,
  // img,
  // year,
  // address,
  // rentalPrice,
  // rentalCompany,
  // type,
  // functionalities,
  // fuelConsumption,
  // engineSize,
  // description,
  // accessories,
  // rentalConditions,
  // mileage,
}) {

  // const addressParts = address.split(', ');
  // const city = addressParts[1];
  // const country = addressParts[2];

  return (
    <CardItem>
      {/* <CarImgWrap> */}
        <CardImg src={car.img} alt={car.make} />
        {/* <IconBtn */}
        {/* onClick={!followStatus ? incrementFavorite : decrementFavorite} */}
        {/* type="button" */}
        {/* > */}
        {/* {!followStatus ? <HeartIcon /> : <HeartIconBlue />} */}
        {/* </IconBtn> */}
      {/* </CarImgWrap> */}

      {/* <InfoWrapper> */}
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
          <SecondaryCarText>{car.address}</SecondaryCarText>
          <SecondaryCarText>{car.country}</SecondaryCarText>
          <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
          <SecondaryCarText>{car.type}</SecondaryCarText>
          <SecondaryCarText>{car.make}</SecondaryCarText>
          <SecondaryCarText>{car.id}</SecondaryCarText> 
          <SecondaryCarText>{car.firstFunctionality}</SecondaryCarText>
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
      {/* </InfoWrapper> */}
    </CardItem>
  );
}

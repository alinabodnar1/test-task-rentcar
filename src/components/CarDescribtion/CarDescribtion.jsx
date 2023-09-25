import React from 'react';
import { RentalCarModal } from '../Buttons/Buttons';
import {
  MadalWrapper,
  CarImg,
  InfoWrapper,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  SecondaryInfo,
  SecondaryCarText,
  Accessories,
  AccessoriesTitle,
  Descriprion,
  AccessoryList,
  AccessoryListItem,
  RentalTitle,
  RentalItem,
  RentalInfo,
  ItemMontserrat,
} from './CarDescribtion.styled';

export default function CarDescribtion({ car, city, country }) {
  const rentalConditionsSplitted = car.rentalConditions.split('\n', 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  return (
    <MadalWrapper>
      <CarImg src={car.img} alt={car.make} width={472} height={248}/>
      <InfoWrapper>
        <MainInfo>
          <CarInfo>
            <CarText>{car.make}</CarText>
            <ModelBlue>
              {car.model}
              <span style={{ color: 'black' }}>,</span>
            </ModelBlue>
            <CarText>{car.year}</CarText>
          </CarInfo>
        </MainInfo>
        <SecondaryInfo>
          <SecondaryCarText>{city}</SecondaryCarText>
          <SecondaryCarText>{country}</SecondaryCarText>
          <SecondaryCarText>id: {car.id}</SecondaryCarText>
          <SecondaryCarText>Year: {car.year}</SecondaryCarText>
          <SecondaryCarText>Type: {car.type}</SecondaryCarText>
          <SecondaryCarText>
            Fuel Consumption: {car.fuelConsumption}
          </SecondaryCarText>
          <SecondaryCarText>Engine Size: {car.engineSize}</SecondaryCarText>
        </SecondaryInfo>
        <Descriprion>{car.description}</Descriprion>
        <Accessories>
          <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
          <AccessoryList>
            {car.accessories.map((accessory, index) => (
              <AccessoryListItem key={index}>{accessory}</AccessoryListItem>
            ))}
            {car.functionalities.map((functionality, index) => (
              <AccessoryListItem key={index}>{functionality}</AccessoryListItem>
            ))}
          </AccessoryList>
        </Accessories>
        <RentalTitle>Rental Conditions:</RentalTitle>
        <RentalInfo>
          <RentalItem>
            <ItemMontserrat>
              Minimum age: <span>{number}</span>
            </ItemMontserrat>
          </RentalItem>
          <RentalItem>{rentalConditionsSplitted[1]}</RentalItem>
          <RentalItem>{rentalConditionsSplitted[2]}</RentalItem>
          <RentalItem>
            <ItemMontserrat>
              Mileage: <span>{car.mileage.toLocaleString('en-EN')}</span>
            </ItemMontserrat>
          </RentalItem>
          <RentalItem>
            <ItemMontserrat>
              Price: <span>{car.rentalPrice}</span>
            </ItemMontserrat>
          </RentalItem>
        </RentalInfo>
        <RentalCarModal />
      </InfoWrapper>
    </MadalWrapper>
  );
}

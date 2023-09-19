import React from 'react';
import rentcar from '../../images/rent-car.jpg';
import Container from '../../components/Container';
import { RentalCarHomePage } from '../../components/Buttons/Buttons';
import { Image, Title, Description } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Unlock Your Journey <span>with Our Wheels!</span>
      </Title>
      <Image src={`${rentcar}`} alt="Rent cars" />
      <Description>
        A car rental application is a convenient program that allows customers
        to easily browse and book rental cars. This app provides an interface
        for selecting cars, filtering them by rental cost, and mileage.
        Traveling with our app will give you incredible experiences and
        memories!
      </Description>
      <RentalCarHomePage />
    </Container>
  );
}

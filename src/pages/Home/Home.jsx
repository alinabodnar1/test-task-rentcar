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
        The car rental app is a user-friendly app that allows customers to
        easily browse and book rental cars. This application provides an
        interface for viewing complete information and ordering cars, as well as
        for choosing your favorite cars. Traveling with our app will give you
        incredible experiences and memories!
      </Description>
      <RentalCarHomePage />
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { getCarsCatalogue } from '../../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Image, Title, Description } from './Home.styled';
import Container from '../../components/Container';
import rentcar from '../../images/rent-car.jpg';
import RentalCarBtn from '../../components/Buttons';

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
      <RentalCarBtn />
    </Container>
  );
}

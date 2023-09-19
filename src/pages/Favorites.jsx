import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCarsCatalogue } from '../api/fetchCars';
import Container from '../components/Container';
import { Wrapper, ListCars } from '../pages/Catalogue/Catalogue.styled';
import CarCard from '../components/CarCard/CarCard';

export default function Favorites() {

  const [cars, setCars] = useState([]);
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));

  useEffect(() => {
    getCarsCatalogue().then(cars => {
      if (cars) {
        setCars(cars);
      }
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <ListCars>
          {favoriteCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </ListCars>
      </Wrapper>
    </Container>
  );
}

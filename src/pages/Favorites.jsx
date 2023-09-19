import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../components/Container';
import { Wrapper, ListCars } from '../pages/Catalogue/Catalogue.styled';
import CarCard from '../components/CarCard/CarCard';

export default function Favorites({ cars }) {

  const favorite = useSelector(state => state.favorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));

  return (
    <Container>
      <Wrapper>
      <ListCars>
        {favoriteCars.map(car => (
          <CarCard key={car.id} car={car}/>
        ))}
        
      </ListCars>
      
    </Wrapper>
    </Container>
    
    
  );
}

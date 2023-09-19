import React, { useState, useEffect } from 'react';
import { getCarsCatalogue } from '../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../components/Container';
import { Wrapper, ListCars } from '../pages/Catalogue/Catalogue.styled';
import CarCard from '../components/CarCard/CarCard';
import { LoadMoreBtn } from '../components/Buttons/Buttons';

export default function Favorites({ data }) {
  

  return (
    <Container>
      <Wrapper>
      <ListCars>
        {/* {cars.map(car => (
          <CarCard key={car.id} car={car}/>
        ))} */}
        
      </ListCars>
      
    </Wrapper>
    </Container>
    
    
  );
}

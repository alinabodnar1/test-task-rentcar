import React, { useState, useEffect } from 'react';
import { getCarsCatalogue } from '../../api/fetchCars';
import Container from '../../components/Container';
import CarCard from '../../components/CarCard/CarCard';
import { Wrapper, ListCars } from '../Catalogue/Catalogue.styled';
import { LoadMoreBtn } from '../../components/Buttons/Buttons';

export default function Catalogue() {
  const [loadedCars, setLoadedCars] = useState(8);
  const [cars, setCars] = useState([]);

  const loadMoreCars = () => {
    setLoadedCars(loadedCars + 8);
  };

  useEffect(() => {
    getCarsCatalogue().then(cars => {
      if (cars) {
        setCars(cars);
      }
    });
  }, []);

  const displayedCars = cars.slice(0, loadedCars);

  return (
    <Container>
      <Wrapper>
        <ListCars>
          {displayedCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </ListCars>
        {loadedCars < cars.length && <LoadMoreBtn onClick={loadMoreCars} />}
      </Wrapper>
    </Container>
  );
}

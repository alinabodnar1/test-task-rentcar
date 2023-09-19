import React, { useState, useEffect } from 'react';
import { getCarsCatalogue } from '../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
import { Wrapper, ListCars } from '../pages/Catalogue/Catalogue.styled';
import CarCard from '../components/CarCard/CarCard';
import { LoadMoreBtn } from '../components/Buttons/Buttons';

export default function Favorites() {
  const [loadedCars, setLoadedCars] = useState(8);
  const [cars, setCars] = useState([]); 

  const loadMoreCars = () => {
    setLoadedCars(loadedCars + 8);
  };

  useEffect(() => {
    getCarsCatalogue()
      .then(cars => {
        if (cars) {
          setCars(cars);
        }
      })
      .catch(() => {
        toast.error(
          'An error occurred while responding cars from the backend.'
        );
      });
  }, []);

  const displayedCars = cars.slice(0, loadedCars);

  return (
    <Wrapper>
      <ListCars>
        {displayedCars.map(car => (
          <CarCard key={car.id} car={car}/>
        ))}
        
      </ListCars>
      {loadedCars < cars.length && <LoadMoreBtn onClick={loadMoreCars} />}
    </Wrapper>
    
  );
}

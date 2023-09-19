import React, { useState, useEffect } from 'react';
import { getCarsCatalogue } from '../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
// import { useLocation } from 'react-router-dom';
import { Wrapper, ListCars } from '../pages/Catalogue/Catalogue.styled';
import CarCard from '../components/CarCard/CarCard';
import {LoadMoreBtn} from '../components/Buttons/Buttons';

export default function Favorites() {
  // const [page, setPage] = useState(1);
  const [loadedCars, setLoadedCars] = useState(8); 
  const [cars, setCars] = useState([]); // setImages

  const loadMoreCars = () => { 
    setLoadedCars(loadedCars + 8); 
  }; 
  
  useEffect(() => {
    getCarsCatalogue()
      .then(cars => {
        console.log('cars', cars);
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
  
  // return (
  //   {displayedImages.map((image) => ( 
  //      {image.description}
  //       ))} 
    // {loadedImages < images.length && ( 
    //   Load More
    // )}
  //   ); }; 


  return (
    <Wrapper>
      <ListCars>
        {displayedCars.map(car => (
          <CarCard key={car.id} car={car}>
            {/* to={`${car.id}`} state={{ from: location }} */}
          </CarCard>
        ))}
            {loadedCars < cars.length && ( 
      <LoadMoreBtn onClick={loadMoreCars}/>
    )}

        <ToastContainer autoClose={3000} position="top-left" />
      </ListCars>
    </Wrapper>
  );
}

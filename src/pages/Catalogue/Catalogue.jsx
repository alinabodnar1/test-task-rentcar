import React, { useState, useEffect } from 'react';
import { getCarsCatalogue, getCarSearch } from '../../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Wrapper, ListCars } from '../Catalogue/Catalogue.styled';
import CarCard from '../../components/CarCard/CarCard';

export default function Catalogue() {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);
  const location = useLocation();

  const cardsPerPage = 8;

  const paginatedCars = cars.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(cars.length / cardsPerPage);

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

  return (
    <Wrapper>
      <ListCars>
        {paginatedCars.map(car => (
          <CarCard key={car.id} car={car}>
            {/* to={`${car.id}`} state={{ from: location }} */}
          </CarCard>
        ))}

        <ToastContainer autoClose={3000} position="top-left" />
      </ListCars>
    </Wrapper>
  );
}

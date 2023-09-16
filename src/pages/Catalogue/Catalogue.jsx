import React, {useState, useEffect} from 'react';
import { getCarsCatalogue } from '../../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { StyledLink } from '../../components/Components.styled';

export default function Catalogue() {
  const [cars, setCars] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCarsCatalogue().then(data => {
      console.log('data', data);
      if (data) {
        setCars(data);
      }
    })
      .catch(() => {
        toast.error("An error occurred while responding trending movies from the backend.")
      });
  }, []);
 
  return (
    <div>
      <ul>
        {cars.map(car => (
          <StyledLink key={car.id}
            to={`${car.id}`}
            state={{from: location}} >
            
            {car.model}
          </StyledLink>
        ))}
     </ul>
      <ToastContainer
            autoClose={3000}
            position="top-left" />
    </div>
  )
}
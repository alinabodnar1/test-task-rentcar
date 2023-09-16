import { useSelector } from 'react-redux';
import React, {useState, useEffect} from 'react';
import { getCarsCatalogue } from '../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { StyledLink } from '../components/Components.styled';

export default function  Favorites ({ data }) {
  // const favorite = useSelector(state => state.favorite);
  // const favoriteCars = data.filter(car => favorite.includes(car.id));
  // return (
  //   <div>
  //   <Container>
  //   <FilterSection data={favoriteCars} />
  //   </Container>

  //   </div>
  // );


  const [cars, setCars] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCarsCatalogue().then(data => {
      if (data.results) {
        setCars(data.results);

        console.log('data', data);
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


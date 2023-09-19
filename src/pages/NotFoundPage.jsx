import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundImage from './../images/404.png';
import Container from '../components/Container';
import { Image, BackHomeBtn } from './Home/Home.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackHomeBtn onClick={() => navigate('/')}>Go Home</BackHomeBtn>
      <Image src={`${notFoundImage}`} alt="Not Found Page" />
    </Container>
  );
};

export default NotFoundPage;

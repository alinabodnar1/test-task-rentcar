import React from 'react';
import { Wrapper } from './NotFoundPage.styled';
import { useNavigate } from 'react-router-dom';
// import myImage from 'images/pngwing.com.png';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
        <h1>This page is not found</h1>
    </Wrapper>
  );
};

export default NotFoundPage;
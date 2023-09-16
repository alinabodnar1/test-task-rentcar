import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {  Header, StyledLink, List } from './Layout.styled';
import  Container  from '../components/Container';

 export default function Layout() {
    return (
        <Container>
            <Header>
                 <List>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/catalogue'>Catalogue</StyledLink>
                    <StyledLink to='/favorites'>Favorites</StyledLink>
                </List>
            </Header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>    
            <footer></footer>
        </Container>
    );
}

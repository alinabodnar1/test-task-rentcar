import React,{ useContext }  from 'react';
import Button from '@mui/material/Button';
import LoadMoreBtn from './LoadMore.styled';
import { GalleryContext } from '../../pages/Favorites';

export default function LoadMore() {
    const { onClick } = useContext(GalleryContext);
        return (
            <LoadMoreBtn>
                 <Button 
                    type="submit"   // "button"
                    onClick={onClick}
                > Load more
            </Button >
            </LoadMoreBtn>
           
        )
    }
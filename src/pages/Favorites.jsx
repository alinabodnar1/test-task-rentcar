import React, { useEffect, createContext, useReducer } from 'react';
// import Searchbar from '../components/Searchbar/Searchbar';
import LoadMore from './LoadMore/LoadMore';
// import Loader from './Loader/Loader';
import { getCarsCatalogue } from '../api/fetchCars';
import { ToastContainer, toast } from 'react-toastify';

export const GalleryContext = createContext();
const initialState = {
  // searchText: '',
  cars: [],
  isLoading: false,
  page: 1
}
function reducer(state,{type,payload}) {
  switch (type) {
    case 'submit':
      return {
        ...state,
        ...payload
      }
    case 'setImages':
      return {
        ...state,
        pictures: [...state.pictures, ...payload]
      }
    case 'setLoadingFalse':
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}
export default function Favorites() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSearch = () => {
 
    dispatch({
      type: 'submit',
      payload: {
        searchText: searchText.trim(),
        pictures: [],
        isLoading: true,
        page: 1
    }})
  }
  
  useEffect(() => {
    if (!state.searchText) {
      return;
    }
    getPictures(state.searchText, state.page).then((data) => {
      if (data.total === 0) {
        toast.error("Sorry, there are no images matching your search query. Please try again.");
        return;
      }
      if (data.hits) {
        dispatch({
          type: 'setImages',
          payload: data.hits
        })
      }
    })
      .catch(() => {
        toast.error("An error occurred while responding from the backend.")
      })
      .finally(() => {
        dispatch({
          type: "setLoadingFalse"
        })
      });

}, [state.page, state.searchText]);

    const loadMore = () => {
      dispatch({
        type: "submit",
        payload: {
          page: state.page + 1,
          isLoading: true
      }})
    }
  
  const { pictures, isLoading } = state;
    return (
      <GalleryContext.Provider value={{
        handleSearch,
        items: pictures,
        isLoading,
        onClick: loadMore
      }}>
        <Searchbar  />
           {isLoading && (
                    <div style={{marginLeft: "10px"}}>
                        <p style={{color: "green"}}>Loading...</p>
                        <Loader />
                    </div>)
            }
        <ImageGallery/>

        {pictures?.length > 0 && !isLoading && (
            <LoadMore  />
        )}
       
        <ToastContainer
            autoClose={3000}
            position="top-left" />
                
      </GalleryContext.Provider>
    )
  }


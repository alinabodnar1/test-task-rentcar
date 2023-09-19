import axios from "axios";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() { 
    Loading.circle({
        svgColor: '#B92F2C',
    });
};

export function stopLoader() { 
    Loading.remove();
};

const BASE_URL = 'https://648c36ec8620b8bae7ec7a57.mockapi.io/advert/';


export const getCarsCatalogue = async () => {

  try {
        const url = `${BASE_URL}`;
        startLoader();
        const response = await axios.get(url);
        return response.data;

    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    }
}


export const getCarSearch = async (search, page) => {
 
  const params = new URLSearchParams({
     q: search,
     page,
     per_page: 8,
  });
  
 const { data } = await axios.get(`${BASE_URL}?${params.toString()}`);
 console.log('cars inside getCarSearch:', data)
 return data;
};

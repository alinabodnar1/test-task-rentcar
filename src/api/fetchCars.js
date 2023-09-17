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

async function getCarsCatalogue() {
  try {
        const url = `${BASE_URL}`;
        startLoader();
        const response = await axios.get(url);

        // console.log('data.results', response.data);

        return response.data;

    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    }
}

async function getCarDetails(id) {
  try {
        const url = `${BASE_URL}/${id}`;
        startLoader();
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    }
}

async function getCarSearch(query) {
  try {
        const url = `${BASE_URL}/search/movie?query=${query}`;
        startLoader();
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        alert('Oops, an error occurred');
    } finally {
        stopLoader();
    } 
}

export { getCarsCatalogue, getCarDetails, getCarSearch };
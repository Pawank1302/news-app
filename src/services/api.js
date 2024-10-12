import axios from 'axios';

const API_KEY = 'f43d7b73e323406fbf8add9249555e90';  
const BASE_URL = 'https://newsapi.org/v2';

export const getNews = (query) => {
  return axios.get(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
};

// Fetch top headlines
export const getLatestNews = () => {
  return axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`); 
};

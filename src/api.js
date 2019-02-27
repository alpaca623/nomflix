import axios from 'axios';

const api = axios.create({
  baseURL:"https://api.themoviedb.org/3/",
  params:{
    api_key:"31beca263d0d8ee5e4536058f1b81a92",
    language:"en-US"
  }
});

api.get("tv/popular");
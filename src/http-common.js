import axios from "axios";


const prodAxios = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-type": "application/json"
  }
});

const localAxios = axios.create({
  baseURL: 'https://localhost:44348/',
  headers: {
    "Content-type": "application/json"
  }
});

export  { localAxios,prodAxios };




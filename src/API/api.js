import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 2000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },
    withCredentials: false,
    credentials: 'same-origin'

});

export const productApi = {
    getProducts() {
        return instance.get(`products`)
    }
}

export const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      console.log('Error fetching products:', error);
      return [];
    }
  };
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../API/api";

const productsSlice = createSlice({
  name: 'products',
  initialState: {},
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions;

export const fetchProductsAsync = () => async (dispatch) => {
  try {
    const products = await fetchProducts();
    const productsById = {};
    products.forEach((product) => {
      productsById[product.id] = product;
    });
    dispatch(setProducts(productsById));
  } catch (error) {
    console.log('Error fetching products:', error);
  }
};

export default productsSlice.reducer;

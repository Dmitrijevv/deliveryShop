import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/slice/cartSlice";

const ItemProduct = () => {
    const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => Object.values(state.products));
  const product = products.find((product) => product.id === parseInt(id));
  const [addedItems, setAddedItems] = useState([]);
  const addToCarts = (product) => {
    dispatch(addToCart(product));
    setAddedItems((prevItems) => [...prevItems, product.id]);
    
  };
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex h-screen m-10 justify-between w-auto">
      <div>
        <img className="w-2/4" src={product.image} alt="" />
      </div>
      <div className="w-2/4">
        <h1 className="text-3xl ">{product.title}</h1>
        <p className="text-xl mt-7">{product.description}</p>
        <p className="mt-48 text-3xl">Price: ${product.price}</p>
        <div className="mt-10 text-2xl">
                  {addedItems.includes(product.id) ? (
                    <button className="text-amber-400" disabled>
                      ADDED YOUR CART
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCarts(product)}
                      className="text-amber-400 cursor-pointer"
                    >
                      ADD TO CART
                    </button>
                  )}
      </div>
      </div>
      
    </div>
  );
};

export default ItemProduct;

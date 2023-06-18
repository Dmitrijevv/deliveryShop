import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import { fetchProductsAsync } from "../../store/slice/productsSlice";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const shops = useSelector((store) => Object.values(store.products));


  const [filteredShop, setFilteredShop] = useState("");
  const [addedItems, setAddedItems] = useState([]);

  const addToCarts = (product) => {
    dispatch(addToCart(product));
    setAddedItems((prevItems) => [...prevItems, product.id]);
  };

  const handleFilterShop = (category) => {
    if (category === filteredShop) {
      setFilteredShop(null); // Скасувати фільтр, якщо той самий магазин вже обраний
    } else {
      setFilteredShop(category); // Встановити фільтр за обраним магазином
    }
  };

  // Отримання унікальних категорій з масиву shops
  const uniqueCategories = [...new Set(shops.map((shop) => shop.category))];

  const filteredProducts = filteredShop
    ? shops.filter((shop) => shop.category === filteredShop)
    : shops;

  return (
    <div className="sm:block md:grid grid-cols-2 ml-5 mt-6">
      <div className="w-8/12">
        {uniqueCategories.map((category) => (
          <div key={category} className="ml-4">
            <button
              className={`border border-slate-300 w-80 h-20 mt-2 rounded hover:bg-slate-400   ${
                category === filteredShop ? "bg-slate-400" : ""
              }`}
              onClick={() => handleFilterShop(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      <div className="w-12/12">
        <div className="flex flex-wrap justify-around">
          {filteredProducts.map((product) => (
            <div className="w-60 m-1 mt-10" key={product.id}>
              <img
                className="h-80 w-56 hove:scale-75 skew-y-3"
                src={product.image || ""}
                alt={product.title}
              />
              <div className="h-44">
                <div className="h-28">
                  <span>{product.title}</span>
                </div>
                <div className="text-3xl text-teal-200 flex items-end">
                  ${product.price}
                </div>
                <div>
                <Link to={`/product/${product.id}`}>Detail</Link>
                </div>
                <div>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

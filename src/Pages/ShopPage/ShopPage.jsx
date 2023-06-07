import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ShopPage = () => {
    
  const shops = [
    {
      nameShop: "Sara",
      logoShop: "",
      products: [
        {
          id: 1,
          nameProduct: "CONTRAST PRINTED T-SHIRT",
          imageUrl:
            "https://static.zara.net/photos///2023/I/0/2/p/6224/327/251/2/w/256/6224327251_2_1_1.jpg?ts=1685093507004",
          price: 20,
        },
        {
          id: 2,
          nameProduct: "SLOGAN PRINT T-SHIRT",
          imageUrl:
            "https://static.zara.net/photos///2023/I/0/2/p/6224/328/898/2/w/256/6224328898_2_1_1.jpg?ts=1685025537192",
          price: 21,
        },
        {
          id: 3,
          nameProduct: "STRIPED JACQUARD T-SHIRT",
          imageUrl:
            "https://static.zara.net/photos///2023/I/0/2/p/5372/302/070/2/w/430/5372302070_2_1_1.jpg?ts=1685029269174",
          price: 22,
        },
        {
          id: 4,
          nameProduct: "T-SHIRT WITH PADDED TRIMS",
          imageUrl:
            "https://static.zara.net/photos///2023/I/0/2/p/3992/303/251/2/w/430/3992303251_2_1_1.jpg?ts=1685432805702",
          price: 23,
        },
        {
          id: 5,
          nameProduct: "RIBBED TANK TOP",
          imageUrl:
            "https://static.zara.net/photos///2023/I/0/2/p/0679/340/250/2/w/271/0679340250_2_1_1.jpg?ts=1684763459412",
          price: "24",
        },
      ],
    },
    {
      nameShop: "H&N",
      logoShop: "",
      products: [
        {
          id: 7,
          nameProduct: "Relaxed Fit Linen resort shirt",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2Fc8%2F51c8b10abb0a13981c58f5c878d0fc75d0e4f525.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          price: "26",
        },
        {
          id: 8,
          nameProduct: "Slim Fit Ribbed vest top",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6b%2Fbe%2F6bbe533910e720766ed02e74f070c84896a4b567.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          price: "25",
        },
        {
          id: 9,
          nameProduct: "Regular Fit Linen-blend shorts",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcc%2F0a%2Fcc0a5d5e8cb1e8bfdf848403645237bab35cd8d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          price: "28",
        },
        {
          id: 10,
          nameProduct: "Regular Fit Terry polo shirt",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F05%2Fb1%2F05b1817c0dd28c86224765b4e6b259ed08fa6764.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          price: "30",
        },
        {
          id: 11,
          nameProduct: "Relaxed Fit Patterned cotton T-shirt",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2Faa%2F6caa553a0cdc22a4a5363fa0cf4603e6f706d0ed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          price: "44",
        },
      ],
    },
    {
      nameShop: "TonnyJeans",
      logoShop: "",
      products: [
        {
          id: 13,
          nameProduct: "T-shirt#1",
          imageUrl:
            "https://tommy-europe.scene7.com/is/image/TommyEurope/DM0DM16891_DW5_hover?$plp_max_395$",
          price: "44",
        },
        {
          id: 14,
          nameProduct: "T-shirt#2",
          imageUrl:
            "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW31538_DW5_hover?$plp_max_395$",
          price: "78",
        },
        {
          id: 15,
          nameProduct: "T-shirt#3",
          imageUrl:
            "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW31538_RBL_hover?$plp_max_395$",
          price: "24",
        },
        {
          id: 16,
          nameProduct: "T-shirt#4",
          imageUrl:
            "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW31538_RBL_hover?$plp_max_395$",
          price: "96",
        },
        {
          id: 17,
          nameProduct: "T-shirt#5",
          imageUrl:
            "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW30054_AF6_hover?$plp_max_395$",
          price: "54",
        },
      ],
    },
  ];

  const [filteredShop, setFilteredShop] = useState(null);

  const {  setCartItems } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState([]);

  

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setAddedItems((prevItems) => [...prevItems, product.id]);

    // const existingCartItems = localStorage.getItem("cartItems");
    // let updatedCartItems = [];
      // if (existingCartItems) {
    //   updatedCartItems = JSON.parse(existingCartItems);
    // }
  
    // updatedCartItems.push(product);
    // localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  
  };
  

  const handleFilterShop = (shopName) => {
    if (shopName === filteredShop) {
      setFilteredShop(null); // Скасувати фільтр, якщо той самий магазин вже обраний
    } else {
      setFilteredShop(shopName); // Встановити фільтр за обраним магазином
    }
  };

  const filteredProducts = filteredShop
    ? shops.find((shop) => shop.nameShop === filteredShop)?.products || []
    : shops.flatMap((shop) => shop.products);

  return (
    <div className=" sm:block md:grid grid-cols-2 ml-5 mt-6 ">
      <div className="w-8/12 ">
        {shops.map((shop) => (
          <div className="ml-4 ">
            <button
              className={`border border-slate-300 w-80 h-20 mt-2 rounded hover:bg-slate-400   ${
                shop.nameShop === filteredShop ? "bg-slate-400" : ""
              }`}
              onClick={() => handleFilterShop(shop.nameShop)}
            >
              {shop.nameShop}
            </button>
          </div>
        ))}
      </div>
      <div className="w-12/12 ">
        <div className="flex flex-wrap justify-around ">
          {filteredProducts.map((product) => (
            <div className="w-60 m-1 " key={product.id}>
              <img
                className="h-80 w-56 hove:scale-75 skew-y-3"
                src={product.imageUrl}
                alt={product.nameProduct}
              />
              <div className="h-44 ">
                <div className="h-10">
                  <span>{product.nameProduct}</span>
                </div>
                <div className="text-3xl text-teal-200 flex items-end ">
                  ${product.price}
                </div>
                <div>
                  {addedItems.includes(product.id) ? (
                    <button className="text-amber-400" disabled>ADDED YOUR CART</button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="text-amber-400"
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

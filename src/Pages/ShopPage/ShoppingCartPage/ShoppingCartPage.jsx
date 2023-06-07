import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const ShoppingCartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [counter, setCounter] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (event, productId) => {
    const { value } = event.target;
    setCounter((prevCount) => ({ ...prevCount, [productId]: value }));
  };

  const handleIncrement = (productId) => {
    setCounter((prevCount) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setCounter((prevCount) => ({
      ...prevCount,
      [productId]: Math.max((prevCount[productId] || 0) - 1, 0),
    }));
  };

  const handleRemove = (productId) => {
    setCounter((prevCount) => {
      const updatedCount = { ...prevCount };
      delete updatedCount[productId];
      return updatedCount;
    });
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const totalPrice = cartItems.reduce((total, product) => {
    const quantity = counter[product.id] || 1;
    return total + product.price * quantity;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the order data
    const orderData = {
      formData,
      cartItems: cartItems.map((product) => ({
        id: product.id,
        name: product.nameProduct,
        quantity: counter[product.id] || 1,
      })),
    };

    // Perform the necessary actions with the order data
    // For example, send it to the server or save it to localStorage

    // Clear the form and cart
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });
    setCartItems([]);

    // Show a success message or redirect to a confirmation page
    console.log("Order submitted:", orderData);
  };

  return (
    <div className="sm:block h-auto md:flex justify-between m-10">
      <div className="sm:w-auto mt-5 md:w-1/3">
        <h1 className="text-4xl">Form order</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-10">
            <label htmlFor="firstName" className="block text-gray-300">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="border border-gray-300 px-4 py-2 w-full"
              value={formData.firstName}
              onChange={(event) =>
                setFormData({ ...formData, firstName: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-300">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="border border-gray-300 px-4 py-2 w-full"
              value={formData.lastName}
              onChange={(event) =>
                setFormData({ ...formData, lastName: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-4 py-2 w-full"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-300">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-300 px-4 py-2 w-full"
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-300">
              Address:
            </label>
            <textarea
              id="address"
              className="border border-gray-300 px-4 py-2 w-full"
              value={formData.address}
              onChange={(event) =>
                setFormData({ ...formData, address: event.target.value })
              }
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Order
          </button>
        </form>
      </div>
      <div className="sm:w-auto md:w-1/2 overflow-scroll">
        <div>
          {cartItems.length > 0 ? (
            <div className=" sm:block mt-10 md:flex flex-wrap ">
              {cartItems.map((product) => (
                <div className="sm:w-auto mb-10 md:w-60 m-1" key={product.id}>
                  <img
                    className="sm:w-auto md:w-56 hover:scale-125 skew-y-3"
                    src={product.imageUrl}
                    alt={product.nameProduct}
                  />
                  <div className="sm:w-auto h-auto md:h-44">
                    <div className="sm:w-auto h-auto md:h-10">
                      <span>{product.nameProduct}</span>
                    </div>
                    <div className="text-3xl text-teal-200 flex items-end">
                      ${product.price}
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="text-2xl"
                      >
                        -
                      </button>
                      <input
                        className="w-10 m-5 text-black"
                        type="number"
                        value={counter[product.id] || "1"}
                        onChange={(event) =>
                          handleChange(event, product.id)
                        }
                      />
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="text-2xl"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center mt-10 text-gray-300 text-4xl">
              Your cart is empty
            </div>
          )}
        </div>

        <div>Total price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

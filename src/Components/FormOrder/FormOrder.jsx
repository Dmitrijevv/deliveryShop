import React, { useState } from "react";

const FormOrder = () => {
    const [modalActive, setModalActive] = useState(false)

    const onOptionChange = e => {
        setModalActive(e.target.value)
      }
  return (
    <div className="h-screen mt-16 ml-11">
      <h3>Select Pizza Size</h3>

      <input 
      type="radio"
      name="choise" 
      value="payNow" 
      id="payNow" 
      checked={modalActive === true} 
      onChange={onOptionChange}
      />
      <label htmlFor="payNow">Pay Now</label>

      <input type="radio" name="choise" value="payLater" id="payLater" />
      <label htmlFor="payLater">Pay Later</label>
    </div>
  );
};

export default FormOrder;

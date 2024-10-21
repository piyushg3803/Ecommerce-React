import React, { useState } from "react";
import CartContext from "./CartContext";

function ContextProv({ children }) {
  const [data, setData] = useState("");
  const [itemNum, setitemNum] = useState(0)

  const addToCart=(productId)=>{
    setData((prevData)=>[...prevData, productId])
    setitemNum(itemNum + 1  )
  }


  return (
    <CartContext.Provider value={{ data, addToCart, itemNum, setitemNum }}>
      {children}
    </CartContext.Provider>
  );
}

export default ContextProv;

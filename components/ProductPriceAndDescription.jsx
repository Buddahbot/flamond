import React, { useEffect, useState } from "react";
import fetchPrice from "../pages/api/fetchPrice";
import fetchImage from "../pages/api/fetchImage";

import styles from "./ProductPriceAndDescription.module.css";

const ProductPriceAndDescription = ({ onSubscriptionToggle }) => {
  const [productPrice, setProductPrice] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [toggleButton, setToggleButton]= useState(false)

  const handleToggle = () => {
    onSubscriptionToggle(true);
    setToggleButton(true)
  };

  useEffect(async () => {
    try {
      const product = await fetchImage();
      setProductDescription(product.name);
    } catch (error) {
      console.log("error while fetching image ==>>", error);
    }
  }, []);

  useEffect(async () => {
    try {
      const hereIsPrice = await fetchPrice();
      setProductPrice(hereIsPrice);
    } catch (error) {
      console.log("error while fetching price ==>>", error);
    }
  }, []);

  if (!productPrice) {
    return (
      <div>
        <h1>Loading product price...</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.colPrice}>
          <p>{productDescription}</p>
        </div>
        <div className={styles.colDescription}>
          <p>${productPrice.unit_amount / 100}</p>
        </div>
      </div>
     {!toggleButton && <div className={styles.buttonWrapper}>
        <p>
          <button onClick={handleToggle}>Subscribe</button>
        </p>
      </div>}
    </>
  );
};

export default ProductPriceAndDescription;

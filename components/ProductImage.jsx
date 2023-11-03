import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import fetchImage from "../pages/api/fetchImage";
import styles from "./ProductImage.module.css";

import Image from "next/image";

// const stripe = require("stripe")(
//   "sk_test_51O5M2yCFauPt80gYZEQ8OwczH7Z4NAy9rgOkw1wD2CleIf3nMiUdHq7C7e3Wdlbe2aisbdEeLuhMM8ZK5aOYsLps00GOkvI38F"
// );

const ProductImage = () => {
  const [productImage, setProductImage] = useState(null);

  useEffect(async () => {
    try {
    const hereIsImage = await fetchImage();
    setProductImage(hereIsImage);
    } catch (error) {
        console.log("error while fetching image ==>>", error)
    }
  }, []);

  if (!productImage) {
    return (
      <div>
        <h1>Loading product Image...</h1>
      </div>
    );
  }

  return (
    <div className={styles.imageAlign}>
        <Image
        src={productImage.images[0]}
        alt={`image of ${productImage.name}`}
        width={300}
        height={300}
        priority={true} 
        />

    </div>
  );
};

export default ProductImage;

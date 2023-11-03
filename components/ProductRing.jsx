import React, { useEffect } from "react";
import Image from "next/image";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import ProductPrice from "./ProductPriceAndDescription";
import ProductImage from "./ProductImage";

const ProductRing = ({ onSubscriptionToggle }) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <div>
      <Elements stripe={stripePromise}>
        <ProductImage />
        <ProductPrice onSubscriptionToggle={onSubscriptionToggle} />
      </Elements>
    </div>
  );
};

export default ProductRing;

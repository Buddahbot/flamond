import React, { useEffect, useState } from "react";
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export async function fetchImage() {

try {
    const productImageFetched = await stripe.products.retrieve(
        'prod_OukqjtDSU7kd2N'
      );
      return productImageFetched
    } catch (error) {
        console.log("error fetching image ==>> ", error)
        return null
      }

}

export default fetchImage;
require("dotenv").config();

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function fetchPrice() {
  try {
    const productPriceFetched = await stripe.prices.retrieve(
      "price_1O6vKRCFauPt80gYvfYvXSy9"
    );
    return productPriceFetched;
  } catch (error) {
    console.log("error fetching price ==>>", error);
    return null;
  }
}

export default fetchPrice;

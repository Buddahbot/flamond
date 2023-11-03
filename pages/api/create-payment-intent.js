const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const calculateOrderAmount = async (items) => {
  try {
    // Fetching the product price 
    const productPriceId = "price_1O6vKRCFauPt80gYvfYvXSy9";
    const productPrice = await stripe.prices.retrieve(productPriceId);
// console.log("here is Product Price in intent ==>>", productPrice)
    // Calculate the amount based on the product price
    return productPrice.unit_amount;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export default async function handler(req, res) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}

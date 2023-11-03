
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function getProductDetails(productId) {
  try {
    const product = await stripe.products.retrieve(productId);
    console.log("HERE IS UTILS PRODUCT", product)
    return product;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
}

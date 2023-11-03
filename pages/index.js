import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddressForm from "../components/AddressForm";

import CheckoutForm from "../components/CheckoutForm";
import ProductRing from "../components/ProductRing";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const [subscriptionActive, setSubscriptionActive] = useState(false);

  // passing handleSubscriptionToggle to ProductPrice
  const handleSubscriptionToggle = (isActive) => {
    setSubscriptionActive(isActive);
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log("here is subscriptionActive", subscriptionActive);
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <ProductRing onSubscriptionToggle={handleSubscriptionToggle} />
          {subscriptionActive && <AddressForm />}
          {subscriptionActive && <CheckoutForm />}
        </Elements>
      )}
    </div>
  );
}

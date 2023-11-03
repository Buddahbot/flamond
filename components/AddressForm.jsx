import React from 'react';
import {AddressElement} from '@stripe/react-stripe-js';
import styles from "./AddressForm.module.css";
// import ProductImageRing from "../components/ProductImageRing"

const AddressForm = () => {
  return (
  
    <div>
  {/* <ProductImageRing /> */}
    <form className={styles.topblue}>
      <h3 className={styles.topblue}>Billing</h3>
      <AddressElement  className={styles.topblue} options={{mode: 'billing'}} />
    </form>
    </div>
  );
};

export default AddressForm;
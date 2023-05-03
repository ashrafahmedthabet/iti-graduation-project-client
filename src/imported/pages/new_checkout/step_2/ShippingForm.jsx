/* eslint-disable jsx-a11y/label-has-associated-control */
import { CustomInput, CustomMobileInput } from '../../../components/formik';
import { Field, useFormikContext } from 'formik';
import React from 'react';

const ShippingForm = () => {
  const { values } = useFormikContext();
  return (
    <div className="checkout-shipping-wrapper" >
      <div className="checkout-shipping-form">
        <div className="checkout-fieldset my-4">
          <div className="d-block checkout-field">
            <Field
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your full name"
              component={CustomInput}
            />
          </div>
        </div>
        <div className="checkout-fieldset my-4">
          <div className="d-block checkout-field">
            <Field
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email address"
              component={CustomInput}
            />
          </div>
        </div>
        <div className="checkout-fieldset my-4">
          <div className="d-block checkout-field">
            <Field
              name="address"
              type="text"
              label="Address"
              placeholder="Enter full delivery address"
              component={CustomInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;

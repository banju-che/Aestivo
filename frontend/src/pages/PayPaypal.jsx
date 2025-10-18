import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const PayPaypal = () => {
  const paypalRef = useRef();

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (_, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "499.00", // update this dynamically if needed
              },
            }],
          });
        },
        onApprove: async (_, actions) => {
          const details = await actions.order.capture();
          toast.success(`Payment completed by ${details.payer.name.given_name}`);
          console.log("Payment Success:", details);
        },
        onError: (err) => {
          toast.error("PayPal payment failed.");
          console.error("PayPal error:", err);
        },
      }).render(paypalRef.current);
    }
  }, []);

  return (
    <section className="p-6 max-w-xl mx-auto mt-20 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Pay with PayPal</h2>
      <p className="mb-4">Click the button below to proceed to PayPal and complete your purchase securely.</p>
      <div ref={paypalRef} />
    </section>
  );
};

export default PayPaypal;

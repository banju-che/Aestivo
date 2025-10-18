import React from 'react';

const PayCard = () => (
  <section className="p-6 max-w-xl mx-auto mt-20 text-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-blue-600">Pay with Card</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
      <input type="text" placeholder="Card Number" className="w-full border p-2 rounded" />
      <div className="flex space-x-2">
        <input type="text" placeholder="Expiry MM/YY" className="w-1/2 border p-2 rounded" />
        <input type="text" placeholder="CVV" className="w-1/2 border p-2 rounded" />
      </div>
      <button className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition">
        Pay Now
      </button>
    </form>
  </section>
);

export default PayCard;
const Checkout = () => (
  <section className="p-6 max-w-xl mx-auto mt-20 text-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-brand-dark">Secure Checkout</h2>
    <p className="mb-6 text-gray-600">
      Please enter your details below to complete your order. All transactions are secure and encrypted.
    </p>

    <form className="space-y-4">
      {/* Personal Details */}
      <div>
        <label className="block text-sm font-semibold mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Jane Doe"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">Shipping Address</label>
        <input
          type="text"
          placeholder="123 Decor Street, Nairobi"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
      </div>

      {/* Payment Info */}
      <div>
        <label className="block text-sm font-semibold mb-1">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
        />
      </div>

      <button
        type="submit"
        className="bg-brand-gold text-brand-dark font-semibold py-3 rounded w-full hover:bg-yellow-400 transition"
      >
        Place Order
      </button>
    </form>
  </section>
);

export default Checkout;

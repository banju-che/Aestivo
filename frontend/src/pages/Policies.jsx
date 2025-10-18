const Policies = () => (
  <section className="p-6 max-w-4xl mx-auto mt-20 text-gray-800">
    <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Store Policies</h2>

    {/* Privacy Policy */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
      <p className="text-gray-700">
        We value your privacy. All customer data collected during transactions is used solely to fulfill orders and improve your shopping experience. We do not share your personal information with third parties without consent.
      </p>
    </div>

    {/* Terms of Service */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Terms of Service</h3>
      <p className="text-gray-700">
        By using HavenHue, you agree to our terms: all content and products are for personal, non-commercial use. Orders are processed once payment is confirmed. We reserve the right to modify prices and product availability at any time.
      </p>
    </div>

    {/* Return Policy */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Return & Exchange Policy</h3>
      <p className="text-gray-700">
        We accept returns within 14 days of delivery for unused items in original condition. Customized furniture and décor items are non-refundable. Please contact our support team for return authorization before sending anything back.
      </p>
    </div>

    {/* Shipping Policy */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Shipping Policy</h3>
      <p className="text-gray-700">
        We ship locally and internationally. Standard delivery takes 3-7 business days within Kenya, while international orders may take up to 14 days. Shipping charges are calculated at checkout. We provide tracking for all orders.
      </p>
    </div>

    {/* Final Note */}
    <p className="text-sm text-gray-500 mt-8">
      If you have any questions about our policies, feel free to <a href="/contact" className="text-brand-gold hover:underline">contact us</a>. We’re here to help!
    </p>
  </section>
);

export default Policies;

const Faq = () => (
  <section className="p-6 max-w-3xl mx-auto mt-20 text-gray-800">
    <h2 className="text-3xl font-bold mb-8 text-brand-dark">Frequently Asked Questions</h2>

    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg">What is your return policy?</h3>
        <p className="text-gray-600">We accept returns within 30 days of delivery for unused and undamaged items. Custom orders are not eligible for return. Please contact us for a return authorization before sending items back.</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Do you offer shipping?</h3>
        <p className="text-gray-600">Yes, we offer nationwide shipping with tracking provided. Local deliveries take 2–5 business days, while rural areas may take a little longer.</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Can I customize my furniture?</h3>
        <p className="text-gray-600">Absolutely! We offer customization for color, size, and finishes. Contact our design team through the <a href="/contact" className="text-brand-gold hover:underline">Contact page</a> to start your custom order.</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Do you provide installation services?</h3>
        <p className="text-gray-600">Yes. For large or complex items, we offer professional installation within Nairobi County and surrounding areas. Installation details are available during checkout.</p>
      </div>

      <div>
        <h3 className="font-semibold text-lg">What payment methods do you accept?</h3>
        <p className="text-gray-600">We accept M-Pesa, credit/debit cards, and bank transfers. All payments are processed securely.</p>
      </div>
    </div>
  </section>
);

export default Faq;

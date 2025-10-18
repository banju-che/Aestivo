const Contact = () => (
  <section className="p-6 max-w-4xl mx-auto mt-20">
    <h2 className="text-4xl font-bold text-center mb-6 text-brand-dark">Get in Touch</h2>
    <p className="text-center text-gray-700 mb-8">
      We'd love to hear from you! Whether you have questions, feedback, or just want to say hello — fill out the form below and our team will get back to you shortly.
    </p>

    <form className="space-y-6 bg-white p-8 shadow-md rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          placeholder="Type your message here..."
          rows="5"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-gold"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-brand-gold text-white px-6 py-3 rounded hover:bg-yellow-400 transition w-full"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;

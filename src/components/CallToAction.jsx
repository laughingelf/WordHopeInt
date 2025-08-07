
const CallToActionSection = () => {
  return (
    <section className="bg-[#e01b24] text-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Be Part of the Mission
      </h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Whether it's giving, going, or praying—your part matters. Join us in bringing lasting hope to Tanzania.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/donate"
          className="bg-white text-[#e01b24] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Donate Now
        </a>
        <a
          href="/contact"
          className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#e01b24] transition"
        >
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;



const highlights = [
  {
    title: "Permanent Medical Clinic",
    text: "Staffed by American and African healthcare professionals, our clinic provides ongoing access to essential care for hundreds of families year-round.",
  },
  {
    title: "Annual Bush Clinics",
    text: "Each summer, mobile teams venture into remote villages to offer free check-ups, treatments, and medicine—bringing care to those who would otherwise go without.",
  },
  {
    title: "Healing with Purpose",
    text: "We combine physical care with spiritual encouragement, praying with patients and sharing the love of Christ in every interaction.",
  },
];

const HealthAndHealing = () => {
  return (
    <>

      {/* Intro */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Bringing Medical Hope to Remote Areas
          </h2>
          <p className="text-green-800 text-lg leading-relaxed">
            Word Hope International brings vital healthcare to underserved communities in Tanzania. Through our permanent medical clinic, yearly bush clinics, and compassionate outreach, we serve thousands with both treatment and prayer.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-green-50 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center">
              <h3 className="text-xl font-bold text-green-900 mb-2">{item.title}</h3>
              <p className="text-green-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Images */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          <img src="/img/medical1.jpeg" alt="Clinic" className="rounded-lg shadow-md" />
          <img src="/img/medical2.jpeg" alt="Doctors helping" className="rounded-lg shadow-md" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e01b24] text-white py-12 px-6 md:px-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Be Part of the Healing</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Help us bring quality healthcare and the hope of Christ to families in need. Your donation supports life-saving treatment, supplies, and medical outreach.
        </p>
        <a
          href="/donate"
          className="bg-white text-[#e01b24] font-semibold px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Donate Now
        </a>
      </section>
    </>
  );
};

export default HealthAndHealing;

import React from "react";
import qrImage from "../../assets/qrcode.avif";

const Donation: React.FC = () => {
  return (
    <section 
      id="donation"
      aria-labelledby="donation-heading"
      className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100"
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-orange-600 text-white">
          <header>
            <h2 id="donation-heading" className="text-3xl font-bold mb-4">Make a Donation</h2>
          </header>
          <p className="text-orange-100 text-lg mb-8 leading-relaxed">
            Your contribution, no matter the size, makes a significant
            difference in the lives of those we serve. Scan the QR code to
            donate securely.
          </p>
          <div 
            className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block self-start border border-white/20"
            aria-label="Direct UPI Donation ID"
          >
            <p className="font-mono text-sm">
              <span className="sr-only">Our UPI ID is </span>
              UPI ID: <strong>81690501@ubin</strong>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 p-8 md:p-12 bg-gray-50 flex items-center justify-center">
          <figure className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <img
              src={qrImage}
              alt="Scan this QR code to donate securely to ODIN Cultural and Social Welfare Society via UPI"
              className="w-64 h-64 object-contain"
              loading="lazy"
              width="256"
              height="256"
            />
            <figcaption className="sr-only">
              QR Code for ODIN Society UPI Donation
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Donation;

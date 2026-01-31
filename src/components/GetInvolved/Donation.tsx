
import React from 'react';
// import ecoImage from "../assets/economic.avif";

const Donation: React.FC = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
            <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-orange-600 text-white">
                    <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
                    <p className="text-orange-100 text-lg mb-8 leading-relaxed">
                        Your contribution, no matter the size, makes a significant difference in the lives of those we serve. Scan the QR code to donate securely.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg inline-block self-start border border-white/20">
                        <p className="font-mono text-sm">UPI ID: savitritiwari2023-1@oksbi</p>
                    </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 bg-gray-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <img
                            src="../src/assets/qrcode.png"
                            alt="UPI QR Code"
                            className="w-64 h-64 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;

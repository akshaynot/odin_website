import React, { useState } from 'react';

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLScIt0pCn_8nKL8j-hz6W0bexefoR0elIuhDBnIwpoMGJ_l21Q/formResponse';

  const entryIds = {
    fullName: 'entry.200951112',
    email: 'entry.1751440976',
    phone: 'entry.1729402694',
    areaOfInterest: 'entry.406002899',
    reason: 'entry.1214427242',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
  
    const formPayload = new FormData();
    Object.keys(formData).forEach((key) => {
      formPayload.append(entryIds[key], formData[key]);
    });
  
    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Forms
        body: formPayload, // Use FormData instead of URLSearchParams
      });
  
      // Assume success since `no-cors` does not return a response
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        reason: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <section id="donate" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Get Involved</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-8">Make a Donation</h2>
              <img src="src/qrcode.png" alt="UPI QR Code" className="w-64 h-64 mb-4" />
              <p className="text-lg font-medium">UPI ID: your-upi-id@example</p>
            </div>

            <div id="volunteer" className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8">Volunteer With Us</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                  <select
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Area of Interest</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="environment">Environment</option>
                    <option value="women-empowerment">Women Empowerment</option>
                  </select>
                  <textarea
                    placeholder="Why do you want to volunteer with us?"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                {submitSuccess && (
                  <p className="text-green-500 mt-2">
                    Thank you! Your application has been submitted.
                  </p>
                )}
                {submitError && (
                  <p className="text-red-500 mt-2">
                    An error occurred. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Help us reach more people by sharing our cause on social media and within your network.
              </p>
              <div className="flex space-x-4">
                <button className="text-orange-500 hover:text-orange-600">Facebook</button>
                <button className="text-orange-500 hover:text-orange-600">Twitter</button>
                <button className="text-orange-500 hover:text-orange-600">Instagram</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Corporate Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Partner with us for CSR initiatives and make a lasting impact on communities.
              </p>
              <button className="text-orange-500 hover:text-orange-600">Learn More</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fundraise</h3>
              <p className="text-gray-600 mb-4">
                Start your own fundraising campaign to support our causes.
              </p>
              <button className="text-orange-500 hover:text-orange-600">Start Campaign</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import React from "react";
import PageHeader from "../components/ui/PageHeader";
import Donation from "../components/GetInvolved/Donation";
import Button from "../components/ui/Button";

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <PageHeader
          title="Get Involved"
          subtitle="Your support powers our mission. Whether you donate, volunteer, or spread the word, you are making a difference."
        />

        <div className="max-w-5xl mx-auto">
          <Donation />

          {/* Other Ways to Help */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Help</h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Spread the Word</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Help us reach more people by sharing our cause on social media
                  and within your network.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-orange-600 font-normal">Facebook</Button>
                  <span className="text-gray-300 self-center">|</span>
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-orange-600 font-normal">Twitter</Button>
                  <span className="text-gray-300 self-center">|</span>
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-orange-600 font-normal">Instagram</Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Corporate Partnerships</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partner with us for CSR initiatives and make a lasting impact on
                  communities.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Fundraise</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Start your own fundraising campaign to support our causes.
                </p>
                <Button variant="outline" className="w-full">
                  Start Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


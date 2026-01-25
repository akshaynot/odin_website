
import React from "react";
import PageHeader from "../components/ui/PageHeader";
import VolunteerRoles from "../components/GetInvolved/VolunteerRoles";
import Calendly from "../components/Calendly";
import Button from "../components/ui/Button";

const Volunteer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <PageHeader
          title="Volunteer With Us"
          subtitle="Make a real impact in Basoda, Madhya Pradesh — on-ground or remotely."
        />

        <div className="max-w-4xl mx-auto space-y-20">
          {/* Quick Stats/Info */}
          <div className="bg-orange-50 rounded-xl p-8 text-center border border-orange-100">
            <p className="text-xl font-medium text-gray-800">
              ⏱ Flexible • 🌍 Online & Offline • 📜 Certificate Provided
            </p>
          </div>

          {/* Calendly CTA */}
          <div className="text-center space-y-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📅 Apply in 2 Minutes</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Book a quick call with our team to understand roles, expectations, and how you can contribute.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <Calendly />
            </div>
          </div>

          {/* Volunteer Roles */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
              <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
            </div>
            <VolunteerRoles />
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Will I receive a certificate?</h3>
                <p className="text-gray-600">Yes, certificates are provided after successful participation.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Is prior experience required?</h3>
                <p className="text-gray-600">No — motivation and commitment matter most.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">Can I volunteer remotely?</h3>
                <p className="text-gray-600">Yes, many roles are fully remote.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-xl text-gray-700">
              Questions?{" "}
              <Button variant="ghost" href="mailto:your@email.com" className="text-orange-600 font-bold underline px-1 py-0 hover:bg-transparent">
                Contact us
              </Button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;


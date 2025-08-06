import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Join Hands with Us to Create a Better Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Supporting marginalized communities through education, healthcare,
            and economic empowerment
          </p>

          <Link
            to="/donate"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300 inline-flex items-center group"
          >
            Donate Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Featured Programs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Featured Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1497528892195-b4ee7ea4f8bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Education Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Education Initiative
                </h3>
                <p className="text-gray-600">
                  Providing quality education and learning resources to
                  underprivileged children.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare Program"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Healthcare Access
                </h3>
                <p className="text-gray-600">
                  Ensuring accessible healthcare services for rural and urban
                  communities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Economic Empowerment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Economic Empowerment
                </h3>
                <p className="text-gray-600">
                  Supporting sustainable livelihoods through skill development
                  and microfinance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Lives Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Active Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Partner Organizations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in our mission to create positive change. Every contribution
            counts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/donate"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              Donate Now
            </Link>
            <Link
              to="/get-involved#volunteer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

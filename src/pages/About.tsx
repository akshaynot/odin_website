import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function About() {
  const [visibleMilestones, setVisibleMilestones] = useState(4);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const milestones = [
    {
      year: "2009",
      title: "Foundation",
      description: "ODIN was established with a vision to serve marginalized communities"
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Launched our flagship education program in rural areas"
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Extended our reach to healthcare and economic empowerment initiatives"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to provide virtual support during global challenges"
    },
    {
      year: "2021",
      title: "Community Centers",
      description: "Established 10 new community centers across rural regions"
    },
    {
      year: "2022",
      title: "Healthcare Initiative",
      description: "Launched mobile healthcare units serving remote areas"
    },
    {
      year: "2023",
      title: "Education Innovation",
      description: "Introduced digital learning programs in 50+ schools"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Received international awards for community development work"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      
      if (bottom && showMoreButton && visibleMilestones < milestones.length) {
        setVisibleMilestones(prev => Math.min(prev + 2, milestones.length));
        if (visibleMilestones + 2 >= milestones.length) {
          setShowMoreButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleMilestones, showMoreButton]);

  const loadMore = () => {
    setVisibleMilestones(prev => Math.min(prev + 2, milestones.length));
    if (visibleMilestones + 2 >= milestones.length) {
      setShowMoreButton(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">About Us</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-orange-500">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              ODIN Cultural and Social Welfare Society is dedicated to empowering marginalized communities through sustainable development initiatives, cultural preservation, and social welfare programs. We believe in creating lasting positive change by addressing the root causes of social issues and working hand-in-hand with communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-600">
                  To create a world where every individual has access to opportunities for growth and development, regardless of their social or economic background.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Values</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Integrity and Transparency</li>
                  <li>Community-Driven Approach</li>
                  <li>Sustainable Development</li>
                  <li>Cultural Preservation</li>
                  <li>Innovation and Adaptability</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Rajesh Kumar",
                  position: "Executive Director",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                  bio: "20+ years of experience in social development"
                },
                {
                  name: "Priya Singh",
                  position: "Program Director",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                  bio: "Expert in community engagement and program management"
                },
                {
                  name: "Amit Patel",
                  position: "Finance Director",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                  bio: "15+ years of experience in nonprofit finance"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-orange-500 mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* History Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {milestones.slice(0, visibleMilestones).map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-4 opacity-0 animate-fade-in"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`
                  }}
                >
                  <div className="md:w-1/4">
                    <div className="text-2xl font-bold text-orange-500">{milestone.year}</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {showMoreButton && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMore}
                  className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200"
                >
                  Show More
                  <ChevronDown className="ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
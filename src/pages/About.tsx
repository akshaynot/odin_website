
import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Mission from '../components/About/Mission';
import TeamGrid from '../components/About/TeamGrid';
import Timeline from '../components/About/Timeline';

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <PageHeader
          title="About Us"
          subtitle="We are a community of changemakers dedicated to building a sustainable and equitable future for all."
        />

        <Mission />
        <TeamGrid />
        <Timeline />
      </section>
    </div>
  );
}
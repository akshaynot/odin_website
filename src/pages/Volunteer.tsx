// src/pages/Volunteer.tsx

import React from "react";

const Volunteer = () => (
  <div className="max-w-4xl mx-auto p-6">
    {/* Hero Section */}
    <section className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Volunteer With Us</h1>
      <p className="text-xl">
        Join hands to create change in Basoda, Madhya Pradesh! We offer both
        offline and online openings—find the role that fits your passion and
        availability.
      </p>
      {/* Uncomment and add your image path */}
      {/* <img src="/volunteer-hero.jpg" alt="Volunteering" className="mt-6 rounded-lg shadow-lg mx-auto" /> */}
    </section>

    {/* Offline Volunteer Roles */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">
        ❤️ Offline Volunteer Roles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Teaching Assistant</h3>
          <p>
            Help children with English & Maths at local schools (3–4hrs/week,
            on-site).
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Event Organizer</h3>
          <p>
            Plan and run community programs, festivals, rallies, or cultural
            events.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Field Outreach Volunteer</h3>
          <p>
            Visit communities, run surveys, raise awareness for campaigns, or
            distribute essentials.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Workshop Facilitator</h3>
          <p>
            Lead workshops on arts, crafts, music, health, or life skills for
            all ages.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">
            Documentation & Photography Volunteer
          </h3>
          <p>
            Capture stories and photos at events; create visual reports for
            social media.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Community Health Volunteer</h3>
          <p>
            Support health camps, blood drives, or conduct sessions on hygiene
            and nutrition.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Logistics & Admin Volunteer</h3>
          <p>
            Assist at the office or community events with records, coordination,
            and supplies.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Fundraising Volunteer</h3>
          <p>
            Organize on-ground funding drives or support offline fundraising
            events.
          </p>
        </div>
      </div>
    </section>

    {/* Online Volunteer Roles */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">🌐 Online Volunteer Roles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Social Media & Content Volunteer</h3>
          <p>
            Manage social accounts, design graphics, write blogs, and boost
            engagement.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">
            Fundraising & Crowdfunding Assistant
          </h3>
          <p>
            Set up online campaigns, write grant proposals, and manage donation
            pages.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Remote Tutor/Mentor</h3>
          <p>
            Provide virtual classes, mentoring, or educational support for
            students and women.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Administrative Support Volunteer</h3>
          <p>Data entry, research, and program documentation—all from home.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Website & Tech Volunteer</h3>
          <p>
            Update/edit the NGO’s website, improve user experience, or build new
            online tools.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">
            Translation & Documentation Volunteer
          </h3>
          <p>
            Translate or create reports and awareness materials in local/English
            languages.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Virtual Event Host</h3>
          <p>
            Plan and host webinars, online awareness sessions, or digital
            cultural programs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Graphic/Video Designer</h3>
          <p>
            Create digital posters, presentations, reels, and videos for
            campaigns.
          </p>
        </div>
      </div>
    </section>

    {/* Volunteer Stories */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Volunteer Stories</h2>
      <blockquote className="italic border-l-4 border-blue-600 pl-4 text-lg">
        “Volunteering here has helped me grow as a person and make real
        friends.”
        <footer className="mt-2">– Priya S.</footer>
      </blockquote>
    </section>

    {/* Application Form */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Join Us</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          className="border rounded p-3"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="border rounded p-3"
          type="email"
          placeholder="Email"
          required
        />
        <select className="border rounded p-3" required>
          <option value="">Select Role</option>
          {/* Offline Roles */}
          <option value="teaching">Teaching Assistant</option>
          <option value="eventorg">Event Organizer</option>
          <option value="outreach">Field Outreach Volunteer</option>
          <option value="workshop">Workshop Facilitator</option>
          <option value="docphoto">
            Documentation & Photography Volunteer
          </option>
          <option value="communityhealth">Community Health Volunteer</option>
          <option value="logistics">Logistics & Admin Volunteer</option>
          <option value="fundraising">Fundraising Volunteer</option>
          {/* Online Roles */}
          <option value="social">Social Media & Content Volunteer</option>
          <option value="crowdfunding">
            Fundraising & Crowdfunding Assistant
          </option>
          <option value="tutor">Remote Tutor/Mentor</option>
          <option value="admin">Administrative Support Volunteer</option>
          <option value="web">Website & Tech Volunteer</option>
          <option value="translation">
            Translation & Documentation Volunteer
          </option>
          <option value="virtualhost">Virtual Event Host</option>
          <option value="designer">Graphic/Video Designer</option>
        </select>
        <input
          className="border rounded p-3"
          type="text"
          placeholder="Availability (e.g., 3hrs/week)"
        />
        <textarea
          className="border rounded p-3"
          placeholder="Brief motivation (optional)"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded p-3 hover:bg-blue-700"
        >
          Apply
        </button>
      </form>
    </section>

    {/* FAQ */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Volunteer FAQ</h2>
      <details className="mb-4">
        <summary className="font-bold cursor-pointer">
          Will I get a certificate?
        </summary>
        <p className="mt-2">
          Yes, we provide certificates upon successful completion.
        </p>
      </details>
      <details className="mb-4">
        <summary className="font-bold cursor-pointer">
          Can I volunteer remotely?
        </summary>
        <p className="mt-2">Many roles are remote-friendly!</p>
      </details>
      <details className="mb-4">
        <summary className="font-bold cursor-pointer">
          Do I need prior experience?
        </summary>
        <p className="mt-2">Not required; passion to help is most important.</p>
      </details>
    </section>

    {/* Contact */}
    <section className="text-center">
      <p className="text-lg">
        Still have questions? Email us at{" "}
        <a className="text-blue-700 underline" href="mailto:your@email.com">
          your@email.com
        </a>
      </p>
    </section>
  </div>
);

export default Volunteer;

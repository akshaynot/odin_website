

import PageHeader from "../components/ui/PageHeader";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <PageHeader
          title="Contact Us"
          subtitle="Have questions or want to get involved? We'd love to hear from you."
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}


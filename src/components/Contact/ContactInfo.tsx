
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../../data/contactData";

const ContactInfo: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h2>
                <div className="space-y-8">
                    <div className="flex items-start group">
                        <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300 mr-5">
                            <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {contactInfo.address.line1}
                                <br />
                                {contactInfo.address.line2}
                                <br />
                                {contactInfo.address.country}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300 mr-5">
                            <Phone className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                            <p className="text-gray-600">{contactInfo.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="p-3 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300 mr-5">
                            <Mail className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                            <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-orange-600 transition-colors">
                                {contactInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 text-white">
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <div className="space-y-4">
                    {contactInfo.officeHours.map((item, index) => (
                        <div key={index} className="flex justify-between border-b border-gray-800 pb-2 last:border-0 last:pb-0">
                            <span className="font-medium text-gray-300">{item.day}</span>
                            <span className="text-orange-400 font-semibold">{item.hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

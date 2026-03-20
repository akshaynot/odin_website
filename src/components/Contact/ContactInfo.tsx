
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../../data/contactData";

const ContactInfo: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">Get in Touch</h2>
                <div className="space-y-8">
                    <div className="flex items-start group">
                        <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors duration-300 mr-5 shadow-sm">
                            <MapPin className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                            <p className="text-slate-600 font-light leading-relaxed">
                                {contactInfo.address.line1}
                                <br />
                                {contactInfo.address.line2}
                                <br />
                                {contactInfo.address.country}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="p-3 bg-pink-50 rounded-xl group-hover:bg-pink-100 transition-colors duration-300 mr-5 shadow-sm">
                            <Phone className="w-6 h-6 text-pink-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                            <p className="text-slate-600 font-light">{contactInfo.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-start group">
                        <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors duration-300 mr-5 shadow-sm">
                            <Mail className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                            <a href={`mailto:${contactInfo.email}`} className="text-slate-600 font-light hover:text-purple-600 transition-colors">
                                {contactInfo.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Hours */}
            <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-10 text-white border border-slate-800 relative overflow-hidden group">
                {/* Decorative blob */}
                <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-orange-500/20 rounded-full mix-blend-screen filter blur-[50px] group-hover:bg-pink-500/20 transition-all duration-700"></div>
                
                <h2 className="text-2xl font-bold mb-6 relative z-10">Office Hours</h2>
                <div className="space-y-4 relative z-10">
                    {contactInfo.officeHours.map((item, index) => (
                        <div key={index} className="flex justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                            <span className="font-light text-slate-300">{item.day}</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-bold tracking-wider">{item.hours}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;

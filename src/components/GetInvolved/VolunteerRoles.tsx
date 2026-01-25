
import React from 'react';
import { ChevronDown, Briefcase, Globe } from 'lucide-react';

const VolunteerRoles: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <div className="flex items-center">
                            <div className="bg-orange-100 p-2 rounded-lg mr-4 text-orange-600">
                                <Briefcase size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Offline Roles (On-ground)</h3>
                        </div>
                        <span className="transform group-open:rotate-180 transition-transform duration-200 text-gray-400">
                            <ChevronDown />
                        </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 border-t border-gray-50 mt-2">
                        <ul className="space-y-3 mt-4">
                            {[
                                "Teaching Assistant (English & Maths)",
                                "Community Outreach & Field Work",
                                "Event & Workshop Organizer",
                                "Health Camp & Awareness Volunteer",
                                "Documentation & Photography"
                            ].map((role, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg mr-4 text-blue-600">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">Online Roles (Remote)</h3>
                        </div>
                        <span className="transform group-open:rotate-180 transition-transform duration-200 text-gray-400">
                            <ChevronDown />
                        </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 border-t border-gray-50 mt-2">
                        <ul className="space-y-3 mt-4">
                            {[
                                "Remote Tutor / Mentor",
                                "Social Media & Content",
                                "Fundraising & Grant Support",
                                "Design (Graphic / Video)",
                                "Website & Technical Support"
                            ].map((role, idx) => (
                                <li key={idx} className="flex items-start text-gray-600">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {role}
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default VolunteerRoles;

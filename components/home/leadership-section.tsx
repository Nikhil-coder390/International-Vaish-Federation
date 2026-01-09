import React from "react";
import Image from "next/image"; // In a real app, use Image
import { Quote } from "lucide-react";

export function LeadershipTestimonials() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Leadership Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visionary Leadership</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Guided by experienced leaders dedicated to the service of the community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center pb-4">
                                <div className="h-48 w-full mb-4 relative">
                                    <Image
                                        src={`/leader_${i}.png`}
                                        alt={`Leader ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">Leader Name {i}</h3>
                                <p className="text-sm text-primary font-medium">Designation</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Voices</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear from our members and beneficiaries about their journey with IVF.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                                <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12" />
                                <p className="text-gray-600 italic mb-6 relative z-10">
                                    "Joining IVF has been a transformative experience. The business networking opportunities have helped me scale my startup globally."
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={`/member_${i}.png`}
                                            alt={`Member ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Member Name</h4>
                                        <p className="text-xs text-gray-500">Entrepreneur, Mumbai</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

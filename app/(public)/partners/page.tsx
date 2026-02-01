import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Building2, Users, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <PageHeader
                title="Our Partners"
                subtitle="Collaborating with leading organizations to empower our community."
            />

            {/* Partners Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partners</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We are proud to collaborate with industry-leading organizations that share our vision of empowering communities through innovation and technology.
                        </p>
                    </div>

                    {/* Kodryx AI Partner Card */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                            {/* Left: Company Info */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                                    <Image
                                        src="/partner.jpg"
                                        alt="Kodryx AI Logo"
                                        width={280}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Kodryx AI</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Our strategic technical partner powering cutting-edge AI and technology solutions. Kodryx AI brings expertise in artificial intelligence, machine learning, and advanced software development to enhance our training programs.
                                    </p>
                                </div>

                                {/* Key Expertise Areas */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-primary mb-2">
                                            <Lightbulb size={28} />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-1">AI & ML</h4>
                                        <p className="text-sm text-gray-600">Advanced AI Solutions</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-secondary mb-2">
                                            <Building2 size={28} />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Software Dev</h4>
                                        <p className="text-sm text-gray-600">Enterprise Solutions</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-primary mb-2">
                                            <Award size={28} />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Innovation</h4>
                                        <p className="text-sm text-gray-600">Cutting-Edge Tech</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="text-secondary mb-2">
                                            <Users size={28} />
                                        </div>
                                        <h4 className="font-semibold text-gray-800 mb-1">Training</h4>
                                        <p className="text-sm text-gray-600">Expert Programs</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Director Info */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="text-center mb-4">
                                        <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                                            <Image
                                                src="/kolla-sujatha.jpeg"
                                                alt="Kolla Sujatha - Director & Founder"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-1">Kolla Sujatha</h4>
                                        <p className="text-primary font-semibold mb-2">Director & Founder</p>
                                        <p className="text-gray-600 text-sm">Kodryx AI</p>
                                    </div>
                                    <div className="border-t pt-4">
                                        <p className="text-gray-700 text-sm leading-relaxed text-center">
                                            Visionary leader driving innovation in artificial intelligence and machine learning, committed to empowering communities through technology.
                                        </p>
                                    </div>
                                </div>

                                {/* Partnership Highlights */}
                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Impact</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">✓</span>
                                            <span className="text-gray-700">Advanced AI-powered training programs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">✓</span>
                                            <span className="text-gray-700">Technology skill development initiatives</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">✓</span>
                                            <span className="text-gray-700">Innovation workshops and mentorship</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary mt-1">✓</span>
                                            <span className="text-gray-700">Digital transformation support</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center bg-gradient-to-r from-primary to-secondary text-white py-12 px-6 rounded-2xl">
                        <h3 className="text-3xl font-bold mb-4">Interested in Partnership?</h3>
                        <p className="text-lg mb-6 max-w-2xl mx-auto">
                            Join us in our mission to empower communities through innovation and technology. Let's create meaningful impact together.
                        </p>
                        <a href="https://kodryx.ai/contact/" target="_blank" className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

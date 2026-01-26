import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Check, Star, Shield, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MembershipPage() {
    const benefits = [
        "Access to Global Business Network",
        "Discounted Healthcare Services",
        "Scholarship Opportunities for Children",
        "Voting Rights in Federation Elections",
        "Priority Access to Events & expos",
        "Feature in Community Directory"
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <PageHeader
                title="Membership"
                subtitle="Become a part of the world's largest Vaishya community network."
                showJoinButton={true}
            />

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join IVF?</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Membership in the International Vaish Federation is not just about identity; it's about empowerment.
                                Unlock a world of opportunities, support, and fellowship.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="bg-green-100 text-green-600 p-1 rounded-full">
                                            <Check size={16} />
                                        </div>
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Link href="/contact">
                                    <Button size="lg">Join Club Near You</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative h-[400px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                            <Image
                                src="/why_join_network.png"
                                alt="Global Network"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Membership Tiers (Mock) */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Membership Categories</h2>
                        <p className="text-gray-600 mt-2">Choose the plan that suits your profile</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Life Member */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Life Member</h3>
                            <p className="text-center text-gray-500 mb-6">For individuals committed to the long-term vision.</p>
                            {/*<div className="text-center text-3xl font-bold text-primary mb-6">₹ 5,100</div>*/}
                            <Button className="w-full" variant="outline">Learn More</Button>
                        </div>

                        {/* Patron Member */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-primary relative hover:-translate-y-1 transition-transform">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                POPULAR
                            </div>
                            <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
                                <Star size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Patron Member</h3>
                            <p className="text-center text-gray-500 mb-6">For distinguished members seeking leadership roles.</p>
                            {/*<div className="text-center text-3xl font-bold text-primary mb-6">₹ 21,000</div>*/}
                            <Button className="w-full">Apply Now</Button>
                        </div>

                        {/* Corporate Member */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center text-purple-600 mb-6 mx-auto">
                                <Briefcase size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-2">Corporate Member</h3>
                            <p className="text-center text-gray-500 mb-6">For businesses looking to partner and network.</p>
                            {/*<div className="text-center text-3xl font-bold text-primary mb-6">₹ 51,000</div>*/}
                            <Button className="w-full" variant="outline">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
} 

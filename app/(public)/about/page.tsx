import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Target, Heart, Globe, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <PageHeader
                title="About Us"
                subtitle="Empowering the Vaishya Community Globally through Unity and Service."
            />

            {/* Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full h-fit text-primary">
                                        <Target size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            To create a unified global platform for the Vaishya community that fosters economic growth, social welfare, and cultural preservation, ensuring every member thrives with dignity and prosperity.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full h-fit text-secondary">
                                        <Heart size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            To empower the community through education, entrepreneurship, and employment. We aim to achieve the "15% Employment Goal" and provide support through scholarships, healthcare, and mentorship.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/community_gathering.png"
                                alt="Community Gathering"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* History & Milestones */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-gray-600">
                            Founded on July 13, 2013, the International Vaish Federation has grown from a visionary idea into a global movement.
                        </p>
                    </div>

                    <div className="relative border-l-4 border-primary/20 ml-6 md:ml-auto md:mr-auto md:w-2/3 space-y-12">
                        {[
                            { year: "2013", title: "Foundation", desc: "IVF was established with the core philosophy of 'Vasudhaiva Kutumbakam'." },
                            { year: "2015", title: "Global Expansion", desc: "Launched first international Clubs in USA and UK." },
                            { year: "2018", title: "100 Clubs", desc: "Reached the milestone of 100 active Clubs worldwide." },
                            { year: "2023", title: "Decade of Seva", desc: "Celebrated 10 years of service with over 50,000 members." }
                        ].map((item, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute -left-[10px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-2">{item.year}</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team (Brief) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Leader Name 1", role: "International President" },
                            { name: "Leader Name 2", role: "General Secretary" },
                            { name: "Leader Name 3", role: "Treasurer" }
                        ].map((leader, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                                <div className="w-32 h-32 relative rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-sm">
                                    <Image
                                        src={`/exec_leader_${i + 1}.png`}
                                        alt={leader.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                                <p className="text-primary font-medium">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

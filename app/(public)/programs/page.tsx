import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Briefcase, Heart, BookOpen, GraduationCap, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsPage() {
    const programs = [
        {
            title: "Employment Generation",
            icon: Briefcase,
            color: "text-blue-600 bg-blue-100",
            desc: "Our flagship initiative '15% Employment Goal' encourages members to hire within the community. We also organize job fairs and connect job seekers with employers."
        },
        {
            title: "Matrimony Services",
            icon: Heart,
            color: "text-pink-600 bg-pink-100",
            desc: "A trusted platform for finding suitable life partners within the Vaishya community. We organize regular meetups and maintain a secure database."
        },
        {
            title: "Education & Scholarships",
            icon: GraduationCap,
            color: "text-green-600 bg-green-100",
            desc: "Providing financial assistance to meritorious students from economically weaker sections. We also offer career counseling and mentorship."
        },
        {
            title: "Business Networking",
            icon: Users,
            color: "text-orange-600 bg-orange-100",
            desc: "Connecting entrepreneurs, traders, and professionals globally. Regular business breakfasts, trade expos, and startup pitch sessions."
        },
        {
            title: "Startup Incubation",
            icon: Lightbulb,
            color: "text-yellow-600 bg-yellow-100",
            desc: "Supporting young entrepreneurs with seed funding, mentorship, and office space to turn their innovative ideas into successful ventures."
        },
        {
            title: "Vedic Heritage",
            icon: BookOpen,
            color: "text-purple-600 bg-purple-100",
            desc: "Preserving and promoting our rich cultural heritage. Organizing Vedic classes, literature festivals, and heritage tours."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <PageHeader
                title="Our Programs"
                subtitle="Driving social change and economic empowerment through targeted initiatives."
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => {
                            const Icon = program.icon;
                            return (
                                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                                    <div className={`w-14 h-14 ${program.color} rounded-lg flex items-center justify-center mb-6`}>
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{program.desc}</p>
                                    <Button variant="outline" className="text-primary hover:bg-primary hover:text-white">Learn More</Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Join hands with us to support these noble causes. Your contribution can change lives.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">Volunteer</Button>
                        <Button variant="outline" size="lg" className="bg-primary border-white text-white hover:bg-primary-dark">Donate</Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

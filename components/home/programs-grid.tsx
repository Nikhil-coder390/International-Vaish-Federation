import React from "react";
import { Handshake, GraduationCap, School, TrendingUp, Landmark, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
    {
        id: 1,
        title: "Ethical Business Practices",
        description: "Promoting integrity and transparency in all business dealings within the community.",
        icon: <Handshake className="w-10 h-10 text-primary" />,
    },
    {
        id: 2,
        title: "Value-Based Education",
        description: "Ensuring our next generation receives education rooted in our cultural values.",
        icon: <GraduationCap className="w-10 h-10 text-primary" />,
    },
    {
        id: 3,
        title: "Knowledge Institutions",
        description: " establishing and supporting institutions that foster learning and research.",
        icon: <School className="w-10 h-10 text-primary" />,
    },
    {
        id: 4,
        title: "Economic Empowerment",
        description: "Creating opportunities for financial growth, startups, and entrepreneurship.",
        icon: <TrendingUp className="w-10 h-10 text-primary" />,
    },
    {
        id: 5,
        title: "Political Empowerment",
        description: "Encouraging active participation and representation in governance.",
        icon: <Landmark className="w-10 h-10 text-primary" />,
    },
    {
        id: 6,
        title: "Spiritual Awakening",
        description: "Connecting with our spiritual roots through meditation and discourse.",
        icon: <Sun className="w-10 h-10 text-primary" />,
    },
];

export function ProgramsGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Programs</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We focus on holistic development through six core pillars designed to uplift every member of our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div key={program.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{program.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-center md:text-left">
                                {program.description}
                            </p>
                            <div className="text-center md:text-left">
                                <Link href="#" className="text-primary font-medium hover:underline inline-flex items-center">
                                    Learn More
                                    <span className="ml-1 text-lg">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

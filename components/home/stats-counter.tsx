import React from "react";

const stats = [
    { label: "Total Members", value: "50,000+" },
    { label: "Clubs Worldwide", value: "150+" },
    { label: "Countries Present", value: "25+" },
    { label: "Scholarships Awarded", value: "5,000+" },
    { label: "Jobs Created", value: "10,000+" },
    { label: "Entrepreneurs Mentored", value: "3,000+" },
];

export function StatsCounter() {
    return (
        <section className="py-16 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4">
                            <div className="text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-sm">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-white/90 font-medium uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

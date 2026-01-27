"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function HeroCarousel() {
    const stats = [
        {
            value: "50k+",
            label: "Total Members",
        },
        {
            value: "150+",
            label: "Clubs Worldwide",
        },
        {
            value: "25+",
            label: "Country Presents",
        },
    ];

    return (
        <div className="relative w-full h-full md:h-[800px] overflow-hidden">
            {/* Background Video */}
            <video
                src="/hero_bg.mp4"
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 py-2 md:py-4">
                {/* Main Content - Centered */}
                <div className="flex-1 flex flex-col justify-center items-start max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Empowering Vaishya Community Collectively
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                        Join the global movement for growth, unity, and prosperity. Connect with entrepreneurs,
                        professionals, and community leaders worldwide.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-base px-8 rounded-lg">
                            Become a Member
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base px-8 rounded-lg bg-transparent border-white text-white hover:bg-white/10"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Stats Counter */}
                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-white">
                                <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                                <p className="text-sm md:text-base mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

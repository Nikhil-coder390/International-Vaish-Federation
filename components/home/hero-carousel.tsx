"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const slides = [
        {
            id: 1,
            image: "/hero_slide_1.png",
            title: "Empowering Vaishya Community Collectively",
            subtitle: "Join the global movement for growth, unity, and prosperity.",
            cta: "Become a Member",
        },
        {
            id: 2,
            image: "/hero_slide_2.png",
            title: "Networking & Business Growth",
            subtitle: "Connect with entrepreneurs and professionals worldwide.",
            cta: "Join Business Wing",
        },
        {
            id: 3,
            image: "/hero_slide_3.png",
            title: "Social Service & Charity",
            subtitle: "Dedicated to noble charities and peaceful living.",
            cta: "Our Initiatives",
        },
    ];

    return (
        <div className="relative overflow-hidden bg-gray-900 h-[600px]" ref={emblaRef}>
            <div className="flex h-full">
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center"
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={slide.id === 1}
                            sizes="100vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10" />

                        {/* Content */}
                        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl animate-in fade-in slide-in-from-bottom-5 duration-700">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-2xl mb-8 opacity-90 drop-shadow-md">
                                {slide.subtitle}
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button size="lg" className="text-lg px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
                                    {slide.cta}
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-8 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

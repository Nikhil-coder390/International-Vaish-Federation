import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    showJoinButton?: boolean;
}

export function PageHeader({ title, subtitle, backgroundImage = "bg-primary", showJoinButton = false }: PageHeaderProps) {
    return (
        <div className={`relative ${backgroundImage === "bg-primary" ? "bg-header-gradient" : "bg-gray-900"} py-16 md:py-24`}>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-6">{subtitle}</p>
                )}
                {showJoinButton && (
                    <Link href="/contact">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">Join Club Near You</Button>
                    </Link>
                )}
            </div>
        </div>
    );
}

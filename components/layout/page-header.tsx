import React from "react";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export function PageHeader({ title, subtitle, backgroundImage = "bg-primary" }: PageHeaderProps) {
    return (
        <div className={`relative ${backgroundImage === "bg-primary" ? "bg-header-gradient" : "bg-gray-900"} py-16 md:py-24`}>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>
                )}
            </div>
        </div>
    );
}

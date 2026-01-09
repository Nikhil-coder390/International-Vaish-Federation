"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full relative z-50">
            {/* Top Bar - Gradient */}
            <div className="bg-header-gradient text-white py-2 px-4">
                <div className="container mx-auto flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <span className="font-semibold tracking-wide">International Vaish Federation</span>
                        <span className="hidden md:inline text-white/90 text-xs">Empowering Vaishya Community Globally</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-white/80">
                            <Phone size={14} />
                            <span>+91 98765 43210</span>
                        </a>
                        <div className="hidden md:flex space-x-3">
                            {/* Icons placeholders as text for now or Lucide icons if desired */}
                            <a href="#" className="hover:text-white/80">FB</a>
                            <a href="#" className="hover:text-white/80">TW</a>
                            <a href="#" className="hover:text-white/80">IN</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white shadow-md sticky top-0">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 relative">
                            <Image
                                src="/logo.jpg"
                                alt="IVF Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-12 h-12 relative">
                            <Image
                                src="/god.png"
                                alt="God Image"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg md:text-xl text-primary leading-tight">
                                International Vaish Federation
                            </h1>
                            <p className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">
                                Vasudhaiva Kutumbakam
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-6 font-medium text-gray-700">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
                        <Link href="/membership" className="hover:text-primary transition-colors">Membership</Link>
                        <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                            Join Now
                        </Button>
                        <Link href="/login">
                            <Button>Login</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 p-2">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="/about" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <Link href="/programs" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Programs</Link>
                            <Link href="/membership" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Membership</Link>
                            <Link href="/resources" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Resources</Link>
                            <Link href="/contact" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <div className="pt-4 flex flex-col space-y-2">
                                <Button variant="outline" className="w-full justify-center">Join Now</Button>
                                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full justify-center">Login</Button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

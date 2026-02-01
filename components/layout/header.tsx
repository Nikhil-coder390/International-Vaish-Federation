"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Facebook, Twitter, Instagram } from "lucide-react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full relative z-50">
            {/* Top Bar - Gradient 
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
                            <a href="#" className="hover:text-white/80" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="hover:text-white/80" aria-label="Twitter">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="hover:text-white/80" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>*/}

            {/* Main Navigation */}
            <div className="bg-white shadow-md sticky top-0">
                <div className="w-full px-6 py-3 flex justify-between items-center">
                    {/* Logo Area - Left */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 relative">
                            <Image
                                src="/logo.jpg"
                                alt="IVF Logo"
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

                    {/* Desktop Menu and Actions - Right Aligned */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <nav className="flex items-center space-x-8 font-medium text-gray-700">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            {/*<Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>*/}
                            <Link href="/membership" className="hover:text-primary transition-colors">Membership</Link>
                            <Link href="/partners" className="hover:text-primary transition-colors">Partners</Link>
                            <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center space-x-4">
                            <Link href="/login">
                                <Button>Login</Button>
                            </Link>
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/god.png"
                                    alt="God Image"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/god.png"
                                alt="God Image"
                                fill
                                className="object-contain"
                            />
                        </div>
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
                            {/*<Link href="/programs" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Programs</Link>*/}
                            <Link href="/membership" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Membership</Link>
                            <Link href="/partners" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Partners</Link>
                            <Link href="/gallery" className="text-gray-700 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
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

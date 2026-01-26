import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About Column */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                IVF
                            </div>
                            <h3 className="font-bold text-lg">Intl. Vaish Federation</h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Empowering the Vaishya community globally through unity, business networking,
                            and social service. Join us in making a difference.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-primary-light">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/leadership" className="hover:text-primary">Leadership</Link></li>
                            <li><Link href="/Clubs" className="hover:text-primary">Our Clubs</Link></li>
                            <li><Link href="/events" className="hover:text-primary">Upcoming Events</Link></li>
                            <li><Link href="/news" className="hover:text-primary">News & Updates</Link></li>
                        </ul>
                    </div>

                    {/* Initiatives */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-primary-light">Our Initiatives</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-primary">Business Networking</Link></li>
                            <li><Link href="#" className="hover:text-primary">Education Scholarships</Link></li>
                            <li><Link href="#" className="hover:text-primary">Matrimonial Services</Link></li>
                            <li><Link href="#" className="hover:text-primary">Women Empowerment</Link></li>
                            <li><Link href="#" className="hover:text-primary">Youth Wing</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-primary-light">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>IVF Head Office, 123 Community Centre, New Delhi, India - 110001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>internationalvaishfederationap@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} International Vaish Federation. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

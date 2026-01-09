"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
    const router = useRouter();

    const handleLogout = () => {
        // In a real app, clear auth tokens/cookies here
        router.push("/login");
    };

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            {/* Top Bar */}
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/dashboard" className="flex items-center space-x-2">
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/logo.jpg"
                            alt="IVF Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-gray-800 text-lg hidden md:block">International Vaish Federation</span>
                </Link>

                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                            <User size={18} />
                        </div>
                        <div className="hidden md:block text-sm text-right leading-tight">
                            <p className="font-semibold text-gray-800">Mumbai Central</p>
                            <p className="text-xs text-gray-500">Club Admin</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Bar - Stats & Logout */}
            <div className="bg-gray-50 border-t border-gray-100 py-2">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="flex space-x-6 text-gray-600 mb-2 md:mb-0">
                        <span><strong>Welcome:</strong> Mumbai Central Club (IVF001)</span>
                        <span className="hidden md:inline">|</span>
                        <span><strong>CMR Status:</strong> <span className="text-green-600 font-medium">8/12 Submitted</span></span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
                        onClick={handleLogout}
                    >
                        <LogOut size={16} className="mr-2" /> Logout
                    </Button>
                </div>
            </div>
        </header>
    );
}

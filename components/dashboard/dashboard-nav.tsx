"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FileText, Users, Award, DollarSign, Calendar, LayoutDashboard } from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/monthly-report", label: "Monthly Report", icon: FileText },
    { href: "/dashboard/membership", label: "Membership", icon: Users },
    { href: "/dashboard/leadership", label: "Leadership", icon: Award },
    { href: "/dashboard/finance", label: "Finance", icon: DollarSign },
    { href: "/dashboard/programs", label: "Programs & Events", icon: Calendar },
    // Additional tabs can be added here
];

export function DashboardNav() {
    const pathname = usePathname();

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-30 overflow-x-auto">
            <div className="container mx-auto px-4">
                <div className="flex space-x-1 min-w-max">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center space-x-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors",
                                    isActive
                                        ? "border-primary text-primary bg-orange-50/50"
                                        : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                                )}
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

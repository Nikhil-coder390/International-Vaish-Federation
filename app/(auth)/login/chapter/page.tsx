"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Building, ArrowLeft } from "lucide-react";

export default function ClubLoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        ClubCode: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Simulate API call
        setTimeout(() => {
            if (formData.ClubCode === "IVF001" && formData.password === "password") {
                // Success
                router.push("/dashboard");
            } else {
                setError("Invalid Club Code or Password. Try 'IVF001' and 'password'.");
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-orange-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary p-6 text-center">
                    <Link href="/login" className="absolute top-4 left-4 text-white/80 hover:text-white">
                        <ArrowLeft size={24} />
                    </Link>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Building size={32} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Club Login</h2>
                    <p className="text-white/80 text-sm mt-1">International Vaish Federation</p>
                </div>

                {/* Form */}
                <div className="p-8">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Club Code</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                placeholder="e.g. IVF001"
                                value={formData.ClubCode}
                                onChange={(e) => setFormData({ ...formData, ClubCode: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <div className="flex justify-between items-center mt-2">
                                <label className="flex items-center text-xs text-gray-600">
                                    <input type="checkbox" className="mr-2" /> Remember me
                                </label>
                                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-11 text-lg" disabled={isLoading}>
                            {isLoading ? "Authenticating..." : "Login to Dashboard"}
                        </Button>
                    </form>

                    <div className="mt-8 text-center border-t border-gray-100 pt-6">
                        <p className="text-sm text-gray-600">
                            Don't have a Club account? <br />
                            <a href="#" className="text-primary font-semibold hover:underline">Register New Club</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

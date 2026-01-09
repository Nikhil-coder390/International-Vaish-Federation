import Link from "next/link";
import { Shield, Building, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary p-6 text-center text-white">
                    <h1 className="text-2xl font-bold">International Vaish Federation</h1>
                    <p className="text-white/90">Member Login Portal</p>
                </div>

                <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Officer Login */}
                        <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-transparent hover:border-primary/20 hover:bg-orange-50 transition-all cursor-pointer group">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Officer Login</h3>
                            <p className="text-gray-500 text-sm mb-6">For IVF Officers & Administrators</p>
                            <Button variant="outline" className="w-full">Login as Officer</Button>
                        </div>

                        {/* Club Login */}
                        <Link href="/login/Club" className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-primary/20 bg-orange-50/50 hover:bg-orange-50 transition-all cursor-pointer group shadow-sm">
                            <div className="w-16 h-16 bg-orange-100 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Building size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Club Login</h3>
                            <p className="text-gray-500 text-sm mb-6">For Club Admin & Management</p>
                            <Button className="w-full">Login as Club</Button>
                        </Link>

                        {/* Member Login */}
                        <div className="flex flex-col items-center text-center p-6 rounded-xl border-2 border-transparent hover:border-green-500/20 hover:bg-green-50 transition-all cursor-pointer group">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <User size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Member Login</h3>
                            <p className="text-gray-500 text-sm mb-6">For Individual Members</p>
                            <Button variant="outline" className="w-full">Login as Member</Button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t border-gray-100">
                    Having trouble logging in? <a href="#" className="text-primary hover:underline">Contact Support</a>
                </div>
            </div>
        </div>
    );
}

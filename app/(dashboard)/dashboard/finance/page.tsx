import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

export default function FinancePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="bg-gray-100 p-6 rounded-full mb-6">
                <Construction size={48} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Finance Module Under Construction</h2>
            <p className="text-gray-500 max-w-md mb-8">
                This module will track income, expenses, bank accounts, and generate financial reports.
            </p>
            <Link href="/dashboard">
                <Button>Return to Dashboard</Button>
            </Link>
        </div>
    );
}

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
            <DashboardHeader />
            <DashboardNav />
            <main className="flex-1 container mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    );
}

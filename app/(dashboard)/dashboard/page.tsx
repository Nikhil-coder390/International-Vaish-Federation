import { Card } from "@/components/ui/card"; // Assuming Card component exists or I'll create it
import { Users, FileText, DollarSign, Calendar } from "lucide-react";

// Inline Card component since I haven't created it yet
function StatCard({ title, value, subtext, icon: Icon, colorClass }: any) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
                    {subtext && <p className="text-xs text-gray-400 mt-2">{subtext}</p>}
                </div>
                <div className={`p-3 rounded-lg ${colorClass}`}>
                    <Icon size={24} className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default function DashboardOverview() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Club Overview</h1>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Members"
                    value="257"
                    subtext="+12 this month"
                    icon={Users}
                    colorClass="bg-blue-500"
                />
                <StatCard
                    title="Activities (Jan)"
                    value="12"
                    subtext="Target: 10"
                    icon={FileText}
                    colorClass="bg-green-500"
                />
                <StatCard
                    title="Funds Available"
                    value="₹ 5.95 L"
                    subtext="Updated today"
                    icon={DollarSign}
                    colorClass="bg-orange-500"
                />
                <StatCard
                    title="Upcoming Events"
                    value="3"
                    subtext="Next: 15 Feb"
                    icon={Calendar}
                    colorClass="bg-purple-500"
                />
            </div>

            {/* Recent Activity Mockup */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Notifications</h2>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></div>
                            <div>
                                <p className="text-sm text-gray-800 font-medium">Monthly Report for December 2025 Approved</p>
                                <p className="text-xs text-gray-500">2 days ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

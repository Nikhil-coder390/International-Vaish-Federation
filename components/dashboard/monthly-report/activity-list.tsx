"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

export function ActivityList() {
    const activities = [
        { id: 1, date: "15-Jan-2026", category: "Education", title: "Scholarship Distribution", location: "Club Office", beneficiaries: 50, points: 100 },
        { id: 2, date: "20-Jan-2026", category: "Health", title: "Blood Donation Camp", location: "City Hospital", beneficiaries: 80, points: 100 },
        { id: 3, date: "25-Jan-2026", category: "Business", title: "Networking Event", location: "Hotel Taj", beneficiaries: 120, points: 100 },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Category</th>
                            <th className="px-6 py-4">Title</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4 text-center">Impact</th>
                            <th className="px-6 py-4 text-center">Points</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((activity) => (
                            <tr key={activity.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{activity.date}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                                        {activity.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{activity.title}</td>
                                <td className="px-6 py-4 text-gray-500">{activity.location}</td>
                                <td className="px-6 py-4 text-center">{activity.beneficiaries}</td>
                                <td className="px-6 py-4 text-center">{activity.points}</td>
                                <td className="px-6 py-4 text-right flex justify-end space-x-2">
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600"><Edit size={16} /></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600"><Trash2 size={16} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

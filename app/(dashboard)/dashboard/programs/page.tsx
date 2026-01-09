"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export default function ProgramsPage() {
    const events = [
        { id: 1, date: "15-Feb-2026", title: "Business Networking Meet", time: "6:00 PM - 9:00 PM", venue: "Hotel Taj, Mumbai", expected: 150, registered: 85 },
        { id: 2, date: "20-Feb-2026", title: "Free Health Checkup Camp", time: "9:00 AM - 5:00 PM", venue: "Club Office", expected: 200, registered: 120 },
        { id: 3, date: "28-Feb-2026", title: "Competitive Exam Coaching", time: "10:00 AM - 4:00 PM", venue: "IVF Training Center", expected: 50, registered: 42 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Programs & Events</h1>
                    <p className="text-gray-500 text-sm">Manage upcoming and past events</p>
                </div>
                <Button>+ Schedule New Program</Button>
            </div>

            <div className="grid gap-6">
                {events.map((event) => (
                    <div key={event.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 text-primary rounded-lg p-3 text-center min-w-[80px]">
                                <p className="text-2xl font-bold">{event.date.split("-")[0]}</p>
                                <p className="text-xs font-semibold uppercase">{event.date.split("-")[1]}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{event.title}</h3>
                                <div className="space-y-1 text-sm text-gray-500">
                                    <p className="flex items-center"><Clock size={14} className="mr-2" /> {event.time}</p>
                                    <p className="flex items-center"><MapPin size={14} className="mr-2" /> {event.venue}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0 flex flex-col md:items-end space-y-2 w-full md:w-auto">
                            <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                                <Users size={14} className="mr-2" />
                                <span>{event.registered} / {event.expected} Registered</span>
                            </div>
                            <div className="flex space-x-2">
                                <Button variant="outline" size="sm">View Details</Button>
                                <Button variant="outline" size="sm">Edit</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

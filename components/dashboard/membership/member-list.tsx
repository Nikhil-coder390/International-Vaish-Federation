"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Eye, Edit, Trash2 } from "lucide-react";

export function MemberList() {
    const members = [
        { id: 1, joinDate: "01-Jan-2025", name: "Ramesh Kumar Gupta", memNo: "IVF001-001", relation: "S/o Prakash", profession: "Business", mobile: "98765 43210", aaf: "Paid", status: "Active" },
        { id: 2, joinDate: "15-Jan-2025", name: "Sujatha Ramesh", memNo: "IVF001-002", relation: "W/o Ramesh", profession: "House Wife", mobile: "98765 43211", aaf: "Not Paid", status: "Active" },
        { id: 3, joinDate: "20-Jan-2024", name: "Vijay Sharma", memNo: "IVF001-003", relation: "S/o Venkat", profession: "Doctor", mobile: "98765 43212", aaf: "Paid", status: "Active" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Search and Filter Bar */}
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input type="text" placeholder="Search by name, mobile, membership no..." className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="flex gap-2">
                    <select className="px-3 py-2 border rounded-md text-sm">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    <select className="px-3 py-2 border rounded-md text-sm">
                        <option>All Payment</option>
                        <option>Paid</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                        <tr>
                            <th className="px-4 py-3">Join Date</th>
                            <th className="px-4 py-3">Name</th>
                            <th className="px-4 py-3">Mem No</th>
                            <th className="px-4 py-3">Relation</th>
                            <th className="px-4 py-3">Profession</th>
                            <th className="px-4 py-3">Mobile</th>
                            <th className="px-4 py-3">AAF Status</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{member.joinDate}</td>
                                <td className="px-4 py-3 font-medium text-gray-900">{member.name}</td>
                                <td className="px-4 py-3 text-xs font-mono">{member.memNo}</td>
                                <td className="px-4 py-3 text-gray-500">{member.relation}</td>
                                <td className="px-4 py-3">{member.profession}</td>
                                <td className="px-4 py-3">{member.mobile}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${member.aaf === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                        {member.aaf}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right flex justify-end gap-1">
                                    <Button variant="ghost" size="icon" className="h-7 w-7"><Eye size={14} /></Button>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-blue-600"><Edit size={14} /></Button>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-red-600"><Trash2 size={14} /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-3 border-t border-gray-100 text-xs text-gray-500 text-center">
                Showing 1-3 of 257 members
            </div>
        </div>
    );
}

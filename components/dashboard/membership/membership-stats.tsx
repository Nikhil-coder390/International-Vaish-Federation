"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function MembershipStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Total Members</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">257</p>
                    <p className="text-xs text-green-600 mt-1">+12 this month</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Active</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">240</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Fees Paid (AAF)</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">230</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Pending Dues</p>
                    <p className="text-2xl font-bold text-red-600 mt-1">27</p>
                </CardContent>
            </Card>
        </div>
    );
}

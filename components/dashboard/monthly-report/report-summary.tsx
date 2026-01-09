"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function ReportSummary() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Total Activities</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Beneficiaries</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">450</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Project Value</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">₹ 5.5L</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="p-4">
                    <p className="text-xs text-gray-500 uppercase font-bold">Total Points</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">680</p>
                </CardContent>
            </Card>
        </div>
    );
}

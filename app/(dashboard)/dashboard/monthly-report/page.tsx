"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReportSummary } from "@/components/dashboard/monthly-report/report-summary";
import { ActivityList } from "@/components/dashboard/monthly-report/activity-list";
import { AddActivityForm } from "@/components/dashboard/monthly-report/add-activity-form";
import { Plus, Printer, FileDown } from "lucide-react";

export default function MonthlyReportPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Monthly Activity Report</h1>
                    <p className="text-gray-500 text-sm">January 2026 • Mumbai Central Club (IVF001)</p>
                </div>
                <div className="flex space-x-3">
                    <Button variant="outline" className="space-x-2">
                        <Printer size={16} />
                        <span>Print</span>
                    </Button>
                    <Button variant="outline" className="space-x-2">
                        <FileDown size={16} />
                        <span>Export</span>
                    </Button>
                    <Button className="space-x-2" onClick={() => setIsFormOpen(true)}>
                        <Plus size={16} />
                        <span>Add Activity</span>
                    </Button>
                </div>
            </div>

            <ReportSummary />
            <ActivityList />

            <div className="flex justify-end pt-4 border-t border-gray-200">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">Submit Report</Button>
            </div>

            <AddActivityForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
    );
}

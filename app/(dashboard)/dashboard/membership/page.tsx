"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MembershipStats } from "@/components/dashboard/membership/membership-stats";
import { MemberList } from "@/components/dashboard/membership/member-list";
import { MemberForm } from "@/components/dashboard/membership/member-form";
import { UserPlus, FileUp } from "lucide-react";

export default function MembershipPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Membership Management</h1>
                    <p className="text-gray-500 text-sm">Manage Club members and profiles</p>
                </div>
                <div className="flex space-x-3">
                    <Button variant="outline" className="space-x-2">
                        <FileUp size={16} />
                        <span>Import CSV</span>
                    </Button>
                    <Button className="space-x-2" onClick={() => setIsFormOpen(true)}>
                        <UserPlus size={16} />
                        <span>Add New Member</span>
                    </Button>
                </div>
            </div>

            <MembershipStats />
            <MemberList />

            <MemberForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </div>
    );
}

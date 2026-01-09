import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { FileText, Download, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <PageHeader
                title="Resources"
                subtitle="Downloads, Galleries, and important documents for our members."
            />

            {/* Downloads Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Important Downloads</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Membership Application Form.pdf",
                            "IVF Constitution & Bylaws.pdf",
                            "Annual Report 2024-25.pdf",
                            "Club Formation Guidelines.pdf",
                            "Sponsorship Brochure.pdf"
                        ].map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center space-x-3">
                                    <FileText className="text-red-500" size={24} />
                                    <span className="font-medium text-gray-700 truncate max-w-[200px]">{file}</span>
                                </div>
                                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                                    <Download size={20} />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Gallery Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Media Gallery</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 flex items-center"><ImageIcon className="mr-2" size={20} /> Latest Photos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square relative rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                    <Image
                                        src={`/resource_photo_${i}.png`}
                                        alt={`Gallery Image ${i}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center"><Video className="mr-2" size={20} /> Video Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="aspect-video relative rounded-lg overflow-hidden group shadow-md cursor-pointer">
                                <Image
                                    src="/resource_photo_2.png" // Using photo 2 as thumbnail
                                    alt="Convention 2025 Highlights"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">Convention 2025 Highlights</div>
                            </div>
                            <div className="aspect-video relative rounded-lg overflow-hidden group shadow-md cursor-pointer">
                                <Image
                                    src="/resource_photo_1.png" // Using photo 1 as thumbnail
                                    alt="President's Message"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">President's Message</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

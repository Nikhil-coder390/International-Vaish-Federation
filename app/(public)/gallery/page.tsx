import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function GalleryPage() {
    const photos = [
        "event.jpeg",
        "event-4.jpeg",
        "event-2.jpeg",
        "donation.jpeg",
        "laptop-donation.jpeg",
        "benches-donation.jpeg"
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <PageHeader
                title="Gallery"
                subtitle="Explore our community events, activities, and memorable moments."
            />

            {/* Photo Gallery Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4 flex items-center"><ImageIcon className="mr-3" size={28} /> Photo Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {photos.map((photo, i) => (
                            <div key={i} className="aspect-square relative rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer">
                                <Image
                                    src={`/${photo}`}
                                    alt={`Gallery Image ${i + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

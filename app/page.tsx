import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroCarousel } from "@/components/home/hero-carousel";
import { ProgramsGrid } from "@/components/home/programs-grid";
import { StatsCounter } from "@/components/home/stats-counter";
import { LeadershipTestimonials } from "@/components/home/leadership-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />
      <HeroCarousel />

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-primary text-sm font-semibold mb-4">
            Since 2013
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to International Vaish Federation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Founded on July 13, 2013, our organization stands on the pillars of
            <span className="font-semibold text-primary"> Non-violence, Noble Charities, and Peaceful Living</span>.
            We are dedicated to uniting the Vaishya community globally, fostering entrepreneurship,
            and providing a platform for social upliftment.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      <ProgramsGrid />
      <StatsCounter />

      {/* Featured Initiatives Section (Bonus as per Prompt) */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Initiatives</h2>
            <p className="text-gray-600">Driving change through targeted community actions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold mb-2">15% Employment Goal</h3>
              <p className="text-gray-600">Encouraging every employer in our community to hire at least 15% of their workforce from within the community.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold mb-2">Young Entrepreneur Platform</h3>
              <p className="text-gray-600">Connecting aspiring startups with mentors, investors, and resources to build the next unicorn.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
              <h3 className="text-xl font-bold mb-2">Competitive Exam Coaching</h3>
              <p className="text-gray-600">Providing free or subsidized coaching for Civil Services, Medical, and Engineering entrance exams.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadershipTestimonials />
      <Footer />
    </main>
  );
}

import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TrustSection from "@/components/sections/TrustSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Edu Improvement AI - Improving How Students Study</title>
        <meta
          name="description"
          content="Edu Improvement AI is an AI-powered study companion that supports Indian students during self-study while providing clear academic visibility to schools and parents."
        />
        <meta
          name="keywords"
          content="EdTech, India, study companion, student learning, school technology, parent visibility, academic progress, self-study"
        />
        <link rel="canonical" href="https://eduimprovement.ai" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Edu Improvement AI - Improving How Students Study" />
        <meta
          property="og:description"
          content="A digital study companion that helps students develop better self-study habits while keeping schools and parents informed."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eduimprovement.ai" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edu Improvement AI" />
        <meta
          name="twitter:description"
          content="Improving how students study — with trust, clarity, and accountability."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <WhoWeServeSection />
          <WhyUsSection />
          <TrustSection />
          <TeamSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

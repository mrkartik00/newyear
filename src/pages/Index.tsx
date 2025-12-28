import { useState, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveQuestions from "@/components/LoveQuestions";
import LoveTimeline from "@/components/LoveTimeline";
import PhotoGallery from "@/components/PhotoGallery";
import RomanticQuotes from "@/components/RomanticQuotes";
import LoveLetter from "@/components/LoveLetter";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<"hero" | "questions" | "story">("hero");
  const storyRef = useRef<HTMLDivElement>(null);

  const handleBeginStory = () => {
    setCurrentSection("questions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuestionsComplete = () => {
    setCurrentSection("story");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative overflow-hidden">
      {/* SEO */}
      <title>A New Year, A Forever With You | For Tejaswi 💕</title>
      <meta
        name="description"
        content="A romantic New Year celebration dedicated to our love story. From December meetings to June promises, this is forever."
      />

      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Sections based on current state */}
      {currentSection === "hero" && (
        <HeroSection onBeginStory={handleBeginStory} />
      )}

      {currentSection === "questions" && (
        <LoveQuestions onComplete={handleQuestionsComplete} />
      )}

      {currentSection === "story" && (
        <div ref={storyRef}>
          <LoveTimeline />
          <PhotoGallery />
          <RomanticQuotes />
          <LoveLetter />
          <FinalSection />
        </div>
      )}
    </main>
  );
};

export default Index;

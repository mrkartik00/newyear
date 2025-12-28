import { Heart, Sparkles } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

interface HeroSectionProps {
  onBeginStory: () => void;
}

const HeroSection = ({ onBeginStory }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 dreamy-gradient">
      {/* Decorative sparkles */}
      <Sparkles className="absolute top-20 left-10 text-rose-gold w-6 h-6 animate-sparkle" />
      <Sparkles className="absolute top-40 right-20 text-primary w-8 h-8 animate-sparkle" style={{ animationDelay: "0.5s" }} />
      <Sparkles className="absolute bottom-40 left-20 text-rose-gold w-5 h-5 animate-sparkle" style={{ animationDelay: "1s" }} />
      <Sparkles className="absolute bottom-20 right-10 text-primary w-7 h-7 animate-sparkle" style={{ animationDelay: "1.5s" }} />

      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        {/* Hearts decoration */}
        <div className="flex justify-center gap-4 mb-8">
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" />
          <Heart className="w-10 h-10 text-deep-rose fill-deep-rose animate-pulse-soft" style={{ animationDelay: "0.3s" }} />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-soft" style={{ animationDelay: "0.6s" }} />
        </div>

        {/* Main heading */}
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gradient mb-6 leading-tight">
          A New Year,
          <br />
          A Forever With You
        </h1>

        {/* Subtext */}
        <p className="font-body text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
          Tejaswi, this New Year is special… because it's{" "}
          <span className="text-primary font-semibold">ours</span>.
        </p>

        {/* Countdown */}
        <div className="mb-12">
          <p className="font-script text-2xl text-muted-foreground mb-6">
            Counting down to our forever...
          </p>
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <button
          onClick={onBeginStory}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-lg shadow-glow hover:shadow-soft transition-all duration-500 hover:scale-105"
        >
          <span>Begin Our Story</span>
          <Heart className="w-5 h-5 fill-current group-hover:animate-wiggle" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

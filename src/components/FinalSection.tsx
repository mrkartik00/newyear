import { useState } from "react";
import { Heart, Sparkles, PartyPopper } from "lucide-react";

const FinalSection = () => {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [fireworks, setFireworks] = useState(false);

  const handleClick = () => {
    setFireworks(true);
    setTimeout(() => {
      setShowFinalMessage(true);
    }, 1000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 romantic-gradient relative overflow-hidden">
      {/* Fireworks animation */}
      {fireworks && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-rose-gold animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                width: 20 + Math.random() * 30,
                height: 20 + Math.random() * 30,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <Heart
              key={`heart-${i}`}
              className="absolute text-primary fill-primary animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                width: 15 + Math.random() * 20,
                height: 15 + Math.random() * 20,
              }}
            />
          ))}
        </div>
      )}

      {!showFinalMessage ? (
        <div className="text-center animate-fade-in-up relative z-10">
          {/* Party icons */}
          <div className="flex justify-center gap-4 mb-8">
            <PartyPopper className="w-12 h-12 text-rose-gold animate-wiggle" />
            <Heart className="w-14 h-14 text-primary fill-primary animate-pulse-soft" />
            <PartyPopper className="w-12 h-12 text-rose-gold animate-wiggle scale-x-[-1]" />
          </div>

          {/* Main heading */}
          <h2 className="font-script text-5xl md:text-7xl text-gradient mb-6">
            Happy New Year, My Love
          </h2>

          {/* Subtext */}
          <p className="font-body text-xl text-foreground/80 mb-12 max-w-xl mx-auto">
            Every year with you is my favorite chapter.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleClick}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-lg shadow-glow hover:shadow-soft transition-all duration-500 hover:scale-105 animate-glow-pulse"
          >
            <span>Forever Starts Again</span>
            <Heart className="w-5 h-5 fill-current group-hover:animate-wiggle" />
          </button>
        </div>
      ) : (
        <div className="text-center animate-fade-in-up relative z-10">
          {/* Final hearts */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="text-primary fill-primary animate-pulse-soft"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  width: 24 + i * 8 - Math.abs(i - 2) * 8,
                  height: 24 + i * 8 - Math.abs(i - 2) * 8,
                }}
              />
            ))}
          </div>

          {/* Final message */}
          <h2 className="font-script text-6xl md:text-8xl text-gradient mb-8">
            I Choose You
          </h2>
          <p className="font-script text-3xl md:text-4xl text-primary">
            Always.
          </p>

          {/* Final quote */}
          <div className="mt-16 max-w-2xl mx-auto glass-card rounded-2xl p-8">
            <p className="font-body text-lg text-foreground/80 italic leading-relaxed">
              "From December meetings to June promises, from Jammu to Lucknow — 
              this is our love story. And this New Year, it continues."
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FinalSection;

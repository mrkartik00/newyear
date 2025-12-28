import { useEffect, useRef, useState } from "react";
import { Heart, Quote } from "lucide-react";

const quotes = [
  "I didn't plan on falling in love, but you walked in and rewrote everything.",
  "Every New Year feels meaningful because I'm stepping into it with you.",
  "We fought, we healed, we chose each other — every single time.",
  "Loving you is my favorite habit.",
  "You're not just my girlfriend, you're my peace.",
  "From first year to forever.",
  "If love had a name, I'd call it Tejaswi.",
  "You are my today, my tomorrow, and all my New Years.",
  "December didn't just give me winter — it gave me you.",
  "From Jammu to Lucknow, love learned geography.",
  "We fought before we fell — maybe love needed honesty first.",
  "Every fight tested us, every return proved us.",
  "4th June — the day my heart finally spoke.",
  "This year begins with your name and ends with your smile.",
];

const RomanticQuotes = () => {
  const [visibleQuotes, setVisibleQuotes] = useState<number[]>([]);
  const quoteRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleQuotes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    quoteRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream/50 to-soft-pink/30 relative">
      {/* Section header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <Quote className="w-10 h-10 text-primary mx-auto mb-4 rotate-180" />
        <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
          Words From My Heart
        </h2>
        <p className="font-body text-muted-foreground">
          Things I want you to know...
        </p>
      </div>

      {/* Quotes grid */}
      <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {quotes.map((quote, index) => (
          <div
            key={index}
            ref={(el) => (quoteRefs.current[index] = el)}
            data-index={index}
            className={`break-inside-avoid transition-all duration-700 ${
              visibleQuotes.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
          >
            <div className="glass-card rounded-2xl p-6 hover:shadow-glow transition-shadow duration-300 group">
              <Quote className="w-6 h-6 text-rose-gold mb-3 opacity-50" />
              <p className="font-body text-lg text-foreground/80 leading-relaxed italic">
                "{quote}"
              </p>
              <div className="mt-4 flex justify-end">
                <Heart className="w-4 h-4 text-primary fill-primary opacity-50 group-hover:opacity-100 group-hover:animate-pulse-soft transition-opacity" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RomanticQuotes;

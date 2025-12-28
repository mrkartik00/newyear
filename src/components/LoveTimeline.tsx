import { useEffect, useRef, useState } from "react";
import { Heart, MapPin, Calendar, Sparkles } from "lucide-react";

interface Chapter {
  id: number;
  title: string;
  date?: string;
  content: string[];
  locations?: string[];
  highlight?: boolean;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "December",
    content: [
      "We met through a friend, during mid-sem chaos…",
      "Two strangers, one unexpected connection.",
    ],
    locations: ["Jammu ❤️ Lucknow"],
  },
  {
    id: 2,
    title: "The Fights",
    content: [
      "We fought a lot in the beginning.",
      "Egos, misunderstandings, silence…",
      "But even then, something kept pulling us back.",
    ],
  },
  {
    id: 3,
    title: "Falling in Love",
    content: [
      "Somewhere between fights and late-night talks…",
      "we fell in love without realizing it.",
    ],
  },
  {
    id: 4,
    title: "4th June",
    date: "Proposal Day",
    content: [
      "4th June — the day my heart chose you forever.",
    ],
    highlight: true,
  },
];

const LoveTimeline = () => {
  const [visibleChapters, setVisibleChapters] = useState<number[]>([]);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisibleChapters((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    chapterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-soft-pink/30 to-cream/50 relative">
      {/* Section header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-4 animate-pulse-soft" />
        <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
          Our Love Story
        </h2>
        <p className="font-body text-muted-foreground">
          Every chapter matters...
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-rose-gold to-primary" />

        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            ref={(el) => (chapterRefs.current[index] = el)}
            data-id={chapter.id}
            className={`relative mb-16 ${
              index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
            } ${
              visibleChapters.includes(chapter.id)
                ? index % 2 === 0
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
                : "opacity-0"
            }`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${
                chapter.highlight
                  ? "bg-deep-rose animate-glow-pulse"
                  : "bg-primary"
              }`}
            />

            {/* Content card */}
            <div
              className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}
            >
              <div
                className={`glass-card rounded-2xl p-6 ${
                  chapter.highlight ? "border-2 border-primary shadow-glow" : ""
                }`}
              >
                {/* Chapter header */}
                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {chapter.highlight && (
                    <Sparkles className="w-5 h-5 text-rose-gold animate-sparkle" />
                  )}
                  <span className="text-sm font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    💌 Chapter {chapter.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-script text-3xl md:text-4xl text-primary mb-2">
                  {chapter.title}
                </h3>

                {/* Date badge */}
                {chapter.date && (
                  <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="w-4 h-4 text-rose-gold" />
                    <span className="font-body text-sm text-rose-gold font-medium">
                      {chapter.date}
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2">
                  {chapter.content.map((line, i) => (
                    <p key={i} className="font-body text-foreground/80 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Location tags */}
                {chapter.locations && (
                  <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {chapter.locations.map((loc, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-petal rounded-full text-sm font-body text-primary"
                      >
                        <MapPin className="w-3 h-3" />
                        {loc}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoveTimeline;

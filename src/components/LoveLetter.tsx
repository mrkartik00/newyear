import { Heart, Feather } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-20 px-4 dreamy-gradient relative">
      {/* Section header */}
      <div className="text-center mb-12 animate-fade-in-up">
        <Feather className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
          A Letter For You
        </h2>
      </div>

      {/* Letter card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-cream/80 rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <Heart className="w-8 h-8 text-primary/20 fill-primary/10" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Heart className="w-6 h-6 text-primary/20 fill-primary/10" />
          </div>

          {/* Letter content */}
          <div className="relative z-10">
            <p className="font-script text-2xl text-primary mb-6">
              My Dearest Tejaswi,
            </p>

            <div className="font-body text-foreground/80 leading-loose space-y-4">
              <p>
                From December chaos to June confessions, from fights to forever,
                you became my safest place.
              </p>
              <p>
                Every moment with you has been a chapter I never want to end.
                The way you laugh, the way you care, the way you love —
                everything about you feels like home.
              </p>
              <p>
                This New Year, I don't wish for anything…
              </p>
              <p className="text-primary font-medium text-lg">
                Because I already have you.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 text-right">
              <p className="font-script text-3xl text-primary">
                Forever Yours,
              </p>
              <p className="font-script text-4xl text-gradient mt-2">
                Kartik
              </p>
              <Heart className="w-5 h-5 text-primary fill-primary inline-block ml-2 animate-pulse-soft" />
            </div>
          </div>

          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-30 pointer-events-none" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
            }} 
          />
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;

import { useState } from "react";
import { Heart, X } from "lucide-react";

interface Photo {
  id: number;
  placeholder: string;
  quote: string;
  rotation: number;
}

const photos: Photo[] = [
  {
    id: 1,
    placeholder: "Your Photo Here",
    quote: "With you, every picture feels like home.",
    rotation: -3,
  },
  {
    id: 2,
    placeholder: "Memory Together",
    quote: "Distance never mattered when hearts were close.",
    rotation: 2,
  },
  {
    id: 3,
    placeholder: "Special Moment",
    quote: "From Jammu to Lucknow, love found its way.",
    rotation: -2,
  },
  {
    id: 4,
    placeholder: "Our Adventure",
    quote: "Every moment with you is worth capturing.",
    rotation: 4,
  },
  {
    id: 5,
    placeholder: "Love Story",
    quote: "The best views are the ones I share with you.",
    rotation: -4,
  },
  {
    id: 6,
    placeholder: "Forever Yours",
    quote: "In every photo, I see our forever.",
    rotation: 1,
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section className="py-20 px-4 romantic-gradient relative overflow-hidden">
      {/* Section header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <Heart className="w-10 h-10 text-primary fill-primary mx-auto mb-4 animate-pulse-soft" />
        <h2 className="font-script text-5xl md:text-6xl text-gradient mb-4">
          Memory Frames
        </h2>
        <p className="font-body text-muted-foreground">
          Each photo tells our story...
        </p>
      </div>

      {/* Photo grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid cursor-pointer group"
            style={{ transform: `rotate(${photo.rotation}deg)` }}
          >
            {/* Photo placeholder */}
            <div className="aspect-square bg-gradient-to-br from-soft-pink to-petal flex items-center justify-center rounded-sm overflow-hidden relative">
              <div className="text-center p-4">
                <Heart className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                <p className="font-body text-sm text-primary/50">
                  {photo.placeholder}
                </p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-body text-primary-foreground text-center px-4 text-sm">
                  {photo.quote}
                </p>
              </div>
            </div>

            {/* Caption area */}
            <div className="mt-3 text-center">
              <p className="font-script text-lg text-muted-foreground">
                Our Moment
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-card rounded-2xl p-6 max-w-lg w-full shadow-glow animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-square bg-gradient-to-br from-soft-pink to-petal flex items-center justify-center rounded-lg mb-4">
              <Heart className="w-20 h-20 text-primary/30" />
            </div>

            <p className="font-script text-2xl text-center text-primary italic">
              "{selectedPhoto.quote}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

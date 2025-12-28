import { useState } from "react";
import { Heart, X } from "lucide-react";

interface Photo {
  id: number;
  src: string;
  quote: string;
  rotation: number;
  orientation: "portrait" | "landscape";
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/images/1.jpg",
    quote: "With you, every picture feels like home.",
    rotation: -3,
    orientation: "landscape",
  },
  {
    id: 2,
    src: "/images/20230408_165352-01.jpeg",
    quote: "Where it all began - our first moments together.",
    rotation: 2,
    orientation: "landscape",
  },
  {
    id: 3,
    src: "/images/20240804_180702.jpg",
    quote: "Every sunset is more beautiful with you.",
    rotation: -2,
    orientation: "landscape",
  },
  {
    id: 4,
    src: "/images/20240804_185654.jpg",
    quote: "Captured moments of pure happiness.",
    rotation: 4,
    orientation: "landscape",
  },
  {
    id: 5,
    src: "/images/20240826_130029.jpg",
    quote: "Making memories, one photo at a time.",
    rotation: -4,
    orientation: "landscape",
  },
  {
    id: 6,
    src: "/images/20240915_213933.jpg",
    quote: "Late night conversations and endless love.",
    rotation: 1,
    orientation: "landscape",
  },
  {
    id: 7,
    src: "/images/20241017_174137.jpg",
    quote: "Together, we make the ordinary extraordinary.",
    rotation: -2,
    orientation: "landscape",
  },
  {
    id: 8,
    src: "/images/20241017_174415.jpg",
    quote: "Every adventure is better with you by my side.",
    rotation: 3,
    orientation: "landscape",
  },
  {
    id: 9,
    src: "/images/20241120_184343.jpg",
    quote: "November nights and timeless memories.",
    rotation: -1,
    orientation: "landscape",
  },
  {
    id: 10,
    src: "/images/20250125_150918.jpg",
    quote: "The way you look at me makes everything perfect.",
    rotation: 2,
    orientation: "landscape",
  },
  {
    id: 11,
    src: "/images/20250125_151918.jpg",
    quote: "In your eyes, I found my home.",
    rotation: -3,
    orientation: "landscape",
  },
  {
    id: 12,
    src: "/images/20250125_163833.jpg",
    quote: "Stolen glances and forever promises.",
    rotation: 1,
    orientation: "landscape",
  },
  {
    id: 13,
    src: "/images/20250125_195255.jpg",
    quote: "Moments that take my breath away.",
    rotation: -2,
    orientation: "landscape",
  },
  {
    id: 14,
    src: "/images/20250201_200719.jpg",
    quote: "February love and winter warmth.",
    rotation: 4,
    orientation: "landscape",
  },
  {
    id: 15,
    src: "/images/20250214_143535.jpg",
    quote: "Valentine's Day with my forever Valentine.",
    rotation: -1,
    orientation: "landscape",
  },
  {
    id: 16,
    src: "/images/20250214_151944.jpg",
    quote: "Celebrating love, celebrating us.",
    rotation: 2,
    orientation: "landscape",
  },
  {
    id: 17,
    src: "/images/20250214_161150.jpg",
    quote: "You're the reason behind my smile.",
    rotation: -3,
    orientation: "landscape",
  },
  {
    id: 18,
    src: "/images/20250214_162205.jpg",
    quote: "Love looks beautiful on us.",
    rotation: 1,
    orientation: "landscape",
  },
  {
    id: 19,
    src: "/images/20250214_162331.jpg",
    quote: "These moments are what dreams are made of.",
    rotation: -2,
    orientation: "landscape",
  },
  {
    id: 20,
    src: "/images/20250214_170728.jpg",
    quote: "Forever choosing you, forever choosing us.",
    rotation: 3,
    orientation: "landscape",
  },
  {
    id: 21,
    src: "/images/20250316_172523.jpg",
    quote: "Spring arrived when you smiled at me.",
    rotation: -1,
    orientation: "landscape",
  },
  {
    id: 22,
    src: "/images/20250316_172650.jpg",
    quote: "Every season is beautiful with you.",
    rotation: 2,
    orientation: "landscape",
  },
  {
    id: 23,
    src: "/images/20250316_174811.jpg",
    quote: "Capturing the magic we create together.",
    rotation: -3,
    orientation: "landscape",
  },
  {
    id: 24,
    src: "/images/20250316_175052.jpg",
    quote: "Our story written in photographs.",
    rotation: 1,
    orientation: "landscape",
  },
  {
    id: 25,
    src: "/images/IMG-20250331-WA0000.jpg",
    quote: "Messages and memories that last forever.",
    rotation: -2,
    orientation: "portrait",
  },
  {
    id: 26,
    src: "/images/IMG_20250309_204037_747.webp",
    quote: "Late night thoughts of you and me.",
    rotation: 4,
    orientation: "portrait",
  },
  {
    id: 27,
    src: "/images/Snapchat-1067811262.jpg",
    quote: "Silly moments that mean everything.",
    rotation: -1,
    orientation: "portrait",
  },
  {
    id: 28,
    src: "/images/Snapchat-1232222312.jpg",
    quote: "Snapshots of our beautiful chaos.",
    rotation: 2,
    orientation: "portrait",
  },
  {
    id: 29,
    src: "/images/Snapchat-1386470202.jpg",
    quote: "Candid love in every frame.",
    rotation: -3,
    orientation: "portrait",
  },
  {
    id: 30,
    src: "/images/Snapchat-143427909.jpg",
    quote: "Unfiltered joy with my favorite person.",
    rotation: 1,
    orientation: "portrait",
  },
  {
    id: 31,
    src: "/images/Snapchat-1522769903.jpg",
    quote: "Real moments, real love.",
    rotation: -2,
    orientation: "portrait",
  },
  {
    id: 32,
    src: "/images/Snapchat-1548171367.jpg",
    quote: "Your laugh is my favorite sound.",
    rotation: 3,
    orientation: "portrait",
  },
  {
    id: 33,
    src: "/images/Snapchat-1962784989.jpg",
    quote: "Every selfie tells our story.",
    rotation: -1,
    orientation: "portrait",
  },
  {
    id: 34,
    src: "/images/Snapchat-1965653966.jpg",
    quote: "Us against the world, always.",
    rotation: 2,
    orientation: "portrait",
  },
  {
    id: 35,
    src: "/images/Snapchat-272254301.jpg",
    quote: "Distance can't dim what we have.",
    rotation: -3,
    orientation: "portrait",
  },
  {
    id: 36,
    src: "/images/Snapchat-273835420.jpg",
    quote: "From screen to heart to forever.",
    rotation: 1,
    orientation: "portrait",
  },
  {
    id: 37,
    src: "/images/Snapchat-393121244.jpg",
    quote: "Making memories wherever we are.",
    rotation: -2,
    orientation: "portrait",
  },
  {
    id: 38,
    src: "/images/Snapchat-530290552.jpg",
    quote: "Your smile brightens my darkest days.",
    rotation: 4,
    orientation: "portrait",
  },
  {
    id: 39,
    src: "/images/Snapchat-626187620.jpg",
    quote: "Together in heart, always.",
    rotation: -1,
    orientation: "portrait",
  },
  {
    id: 40,
    src: "/images/Snapchat-631720160.jpg",
    quote: "Love captured in pixels and moments.",
    rotation: 2,
    orientation: "portrait",
  },
  {
    id: 41,
    src: "/images/Snapchat-829790054.jpg",
    quote: "My favorite person in my favorite place.",
    rotation: -3,
    orientation: "portrait",
  },
  {
    id: 42,
    src: "/images/file_000000009dc061f79aa3236c817b3f24_conversation_id=67f8ae8e-56ac-8012-8c4d-02a76fa0bfda&message_id=71aee5b8-dfaa-4085-9c1c-067d6069a011.png",
    quote: "Every conversation with you feels like coming home.",
    rotation: 1,
    orientation: "portrait",
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

      {/* Photo grid with masonry layout */}
      <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="polaroid cursor-pointer group break-inside-avoid mb-4 md:mb-6"
            style={{ transform: `rotate(${photo.rotation}deg)` }}
          >
            {/* Photo container with dynamic aspect ratio */}
            <div 
              className={`${
                photo.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
              } bg-gradient-to-br from-soft-pink to-petal rounded-sm overflow-hidden relative`}
            >
              <img
                src={photo.src}
                alt={photo.quote}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="font-body text-primary-foreground text-center text-xs md:text-sm leading-relaxed">
                  {photo.quote}
                </p>
              </div>
            </div>

            {/* Caption area */}
            <div className="mt-2 md:mt-3 text-center">
              <p className="font-script text-sm md:text-lg text-muted-foreground">
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
            className="bg-card rounded-2xl p-4 md:p-6 max-w-4xl w-full shadow-glow animate-fade-in-up relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-muted-foreground hover:text-foreground bg-card rounded-full p-2 z-10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className={`${
              selectedPhoto.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
            } bg-gradient-to-br from-soft-pink to-petal rounded-lg mb-4 overflow-hidden max-h-[70vh]`}>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.quote}
                className="w-full h-full object-contain"
              />
            </div>

            <p className="font-script text-xl md:text-2xl text-center text-primary italic px-4">
              "{selectedPhoto.quote}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

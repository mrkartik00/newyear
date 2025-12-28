import { useState } from "react";
import { Heart, Sparkles, Crown, Home, MapPin, Calendar, Infinity } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: (string | React.ReactNode)[];
  response: string;
  correctIndex?: number;
  icon?: React.ReactNode;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Before we begin… choose your favorite color 💕",
    options: ["Pink", "Pink", "Pink", "Pink"],
    response: "Obviously pink… just like us 😌",
  },
  {
    id: 2,
    question: "Choose your future husband 👀",
    options: ["Kartik"],
    response: "Smart choice, Miss Jammu 💍",
  },
  {
    id: 3,
    question: "Where is your heart from?",
    options: [
      "Jammu 💖",
      <span className="inline-flex items-center gap-1">Jammu <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" /> <Heart className="w-3 h-3 fill-pink-500 text-pink-500 animate-pulse" style={{animationDelay: '0.2s'}} /></span>,
      <span className="animate-pulse bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-bold">Jammu ✨</span>
    ],
    response: "And mine learned how to belong there.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 4,
    question: "Where did your love find you?",
    options: [
      "Lucknow",
      <span className="inline-flex items-center gap-1">Lucknow <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" /></span>,
      <span className="bg-yellow-200 px-2 py-1 rounded font-semibold text-yellow-900">Lucknow</span>
    ],
    response: "Lucknow didn't just teach me culture — it gave me you.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 5,
    question: "When did our story begin?",
    options: [
      "December",
      "During mid-sems",
      <span className="inline-flex items-center gap-1">Exactly when we met <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-bounce" /></span>
    ],
    response: "Chaos outside, magic inside.",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: 6,
    question: "How did we start?",
    options: [
      "Calm & smooth",
      "Fighting & confusion",
      <span className="inline-flex items-center gap-1">Real & honest <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" /></span>
    ],
    response: "The best stories never start perfect.",
    correctIndex: 2,
  },
  {
    id: 7,
    question: "What kept us together?",
    options: [
      "Ego",
      "Silence",
      <span className="inline-flex items-center gap-1">Love + Effort + Choosing each other <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" /></span>
    ],
    response: "Always choosing, always us.",
    correctIndex: 2,
  },
  {
    id: 8,
    question: "Which date changed everything?",
    options: [
      "1st January",
      "14th February",
      <span className="inline-flex items-center gap-1">4th June <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" /></span>
    ],
    response: "A proposal, a promise, a forever.",
    correctIndex: 2,
  },
  {
    id: 9,
    question: "What are we now?",
    options: [
      "Just a couple",
      "Best friends",
      <span className="inline-flex items-center gap-1">Home to each other <Home className="w-4 h-4 text-amber-600 animate-pulse" /></span>
    ],
    response: "Home isn't a place. It's a person.",
    correctIndex: 2,
    icon: <Home className="w-5 h-5" />,
  },
  {
    id: 10,
    question: "Who wins most arguments? 😏",
    options: [
      "Tejaswi 😌",
      <span className="inline-flex items-center gap-1">Tejaswi <Crown className="w-4 h-4 text-yellow-500 animate-bounce" /></span>,
      <span className="font-bold text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text">Tejaswi (always)</span>
    ],
    response: "And I happily lose.",
    icon: <Crown className="w-5 h-5" />,
  },
  {
    id: 11,
    question: "Where are we going?",
    options: [
      "More memories",
      "More love",
      <span className="inline-flex items-center gap-1">Forever together <Infinity className="w-4 h-4 text-purple-500 animate-pulse" /></span>
    ],
    response: "Destination: Always.",
    icon: <Infinity className="w-5 h-5" />,
  },
  {
    id: 12,
    question: "Who will I love in every New Year?",
    options: [
      <span className="inline-flex items-center gap-1">Tejaswi <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" /></span>,
      <span className="inline-flex items-center gap-1">Tejaswi forever <Infinity className="w-3 h-3 text-purple-500 animate-pulse" /></span>,
      <span className="font-bold bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 bg-clip-text text-transparent">Only Tejaswi</span>
    ],
    response: "Every year. Every lifetime.",
  },
];

interface LoveQuestionsProps {
  onComplete: () => void;
}

const LoveQuestions = ({ onComplete }: LoveQuestionsProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [heartBurst, setHeartBurst] = useState(false);

  const handleOptionClick = () => {
    setShowResponse(true);
    setHeartBurst(true);
    
    setTimeout(() => {
      setHeartBurst(false);
    }, 600);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowResponse(false);
      } else {
        onComplete();
      }
    }, 2000);
  };

  const question = questions[currentQuestion];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 romantic-gradient relative overflow-hidden">
      {/* Progress indicator */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= currentQuestion ? "bg-primary" : "bg-primary/30"
            }`}
          />
        ))}
      </div>

      {/* Heart burst animation */}
      {heartBurst && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary fill-primary animate-heart-burst"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-50px)`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center animate-fade-in-up" key={currentQuestion}>
        {/* Question icon */}
        {question.icon && (
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
            {question.icon}
          </div>
        )}

        {/* Question */}
        <h2 className="font-script text-3xl md:text-5xl text-foreground mb-10">
          {question.question}
        </h2>

        {/* Options */}
        {!showResponse && (
          <div className="flex flex-wrap gap-4 justify-center">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={handleOptionClick}
                className="px-6 py-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full font-body text-lg shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 border border-border"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Response */}
        {showResponse && (
          <div className="animate-fade-in-up">
            <Sparkles className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-sparkle" />
            <p className="font-body text-xl md:text-2xl text-primary italic">
              {question.response}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveQuestions;

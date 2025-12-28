import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      const newYear = new Date(nextYear, 0, 1, 0, 0, 0);
      const difference = newYear.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {timeBlocks.map((block, index) => (
        <div
          key={block.label}
          className="glass-card rounded-2xl p-3 md:p-6 min-w-[70px] md:min-w-[100px] text-center animate-glow-pulse"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="font-script text-3xl md:text-5xl text-primary font-bold">
            {String(block.value).padStart(2, "0")}
          </div>
          <div className="font-body text-xs md:text-sm text-muted-foreground mt-1">
            {block.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

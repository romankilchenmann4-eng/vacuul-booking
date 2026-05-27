"use client";

import { useEffect, useState } from "react";
import { HEALTH_EXPO_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date(HEALTH_EXPO_DATE).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-vacuul-accent text-vacuul-blue font-bold text-2xl md:text-4xl rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-white/70 text-xs md:text-sm mt-2 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return (
      <p className="text-vacuul-accent font-semibold text-lg">
        Die Health Expo Basel läuft jetzt!
      </p>
    );
  }

  return (
    <div className="flex gap-3 md:gap-4">
      <CountdownUnit value={timeLeft.days} label="Tage" />
      <CountdownUnit value={timeLeft.hours} label="Std" />
      <CountdownUnit value={timeLeft.minutes} label="Min" />
      <CountdownUnit value={timeLeft.seconds} label="Sek" />
    </div>
  );
}
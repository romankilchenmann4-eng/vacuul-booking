"use client";

interface BookingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function BookingButton({ children, className, onClick }: BookingButtonProps) {
  const openCalendly = () => {
    const w = window as unknown as Record<string, () => void>;
    if (w.__calendlyOpen) {
      w.__calendlyOpen();
    }
    onClick?.();
  };

  return (
    <button onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
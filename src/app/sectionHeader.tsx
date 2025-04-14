// components/SectionHeader.tsx
import { ReactNode } from 'react';

export default function SectionHeader({
  icon,
  title,
  className = '',
}: {
  icon: ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-2xl sm:text-4xl font-medium mb-4 ${className}`}
    >
      <span className="text-blue-500 text-xl sm:text-3xl">{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

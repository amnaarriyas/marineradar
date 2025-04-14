'use client'

import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaRegComment } from 'react-icons/fa';
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoDiamondOutline } from "react-icons/io5";

const defaultSections = [
  { id: 'hero', icon: FaChevronDown },
  { id: 'features', icon: AiOutlineAppstore },
  { id: 'testimonials', icon: LuUsersRound },
  { id: 'cta', icon: IoDiamondOutline },
  { id: 'footer', icon: FaRegComment },
  { id: 'extra', icon: FaChevronUp },
];

export default function VerticalTimeline({
  sections = defaultSections,
}: {
  sections?: { id: string; icon: any }[];
}) {
  const [spacing, setSpacing] = useState<number[]>([]);

  useEffect(() => {
    const calculateSpacing = () => {
      const newSpacing: number[] = [];

      for (let i = 0; i < sections.length - 1; i++) {
        const current = document.getElementById(sections[i].id);
        const next = document.getElementById(sections[i + 1].id);

        if (current && next) {
          const currentBottom = current.getBoundingClientRect().top + current.offsetHeight;
          const nextTop = next.getBoundingClientRect().top;
          const gap = nextTop - currentBottom;

          newSpacing.push(gap > 0 ? gap : 80); // Fallback if overlap or zero
        }
      }

      setSpacing(newSpacing);
    };

    // Initial calculation
    calculateSpacing();

    // Recalculate on resize
    window.addEventListener('resize', calculateSpacing);
    return () => window.removeEventListener('resize', calculateSpacing);
  }, [sections]);

  return (
    <div
      className="absolute top-0 left-0 flex flex-col items-center pt-80 pl-10"
      style={{ zIndex: 10 }}
    >
      {sections.map((section, index) => (
        <div key={section.id} className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <section.icon className="text-white-500 text-lg" />
          </div>

          {index < sections.length - 1 && (
            <div
              className={`w-[2px] bg-[#0A84FF] shadow-[0px_0px_10.8px_3px_rgba(10,132,255,0.75)]`}
              style={{
                height: `${spacing[index] || 80}px`,
                marginTop: '-4px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

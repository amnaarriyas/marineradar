// components/VerticalTimeline.tsx
import { FaChevronDown, FaChevronUp, FaRegComment } from 'react-icons/fa';
import { LuUsersRound } from "react-icons/lu";
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoDiamondOutline } from "react-icons/io5";

type Section = {
  id: string;
  icon: React.ComponentType; // Type for React components
};

type VerticalTimelineProps = {
  sections?: Section[];
  spacing?: number[];
};

const defaultSections: Section[] = [
  { id: 'hero', icon: FaChevronDown }, // Customize section ID and icon
  { id: 'features', icon: AiOutlineAppstore }, // Customize section ID and icon
  { id: 'testimonials', icon: LuUsersRound }, // Customize section ID and icon
  { id: 'cta', icon: IoDiamondOutline }, // Customize section ID and icon
  { id: 'footer', icon: FaRegComment }, // Customize section ID and icon
  { id: 'extra', icon: FaChevronUp }, // Customize section ID and icon
];

// Sample spacing values (customize these as needed)
const defaultSpacing = [400, 750, 850, 710, 820]; // Add or adjust spacing values

export default function VerticalTimeline({
  sections = defaultSections, 
  spacing = defaultSpacing, 
}: VerticalTimelineProps) {
  return (
    <div
      className="absolute top-0 left-0 flex flex-col items-center pt-80 pl-10"
      style={{ zIndex: 10 }}
    >
      {sections.map((section, index) => (
        <div key={section.id} className="flex flex-col items-center">
          {/* Icon */}
          <div className="w-8 h-8 flex items-center justify-center">
            <section.icon className="text-white-500 text-lg" />
          </div>

          {/* Line */}
          {index < sections.length - 1 && (
            <div
              className={`w-[2px] bg-[#0A84FF] shadow-[0px_0px_10.8px_3px_rgba(10,132,255,0.75)]`}
              style={{
                height: `${spacing[index] || 120}px`, 
                marginTop: '-4px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

import { BookmarkIcon } from "./BookmarkIcon";

interface LogoProps {
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { text: "text-xl", icon: "w-4 h-5" },
  md: { text: "text-3xl", icon: "w-5 h-7" },
  lg: { text: "text-5xl md:text-6xl", icon: "w-7 h-9" },
};

export function Logo({
  color = "#6e3726",
  size = "md",
  className = "",
}: LogoProps) {
  const s = sizeMap[size];
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <BookmarkIcon className={s.icon} color={color} />
      <span
        className={`font-redressed ${s.text} leading-none`}
        style={{ color }}
      >
        Pagemarkd
      </span>
    </div>
  );
}

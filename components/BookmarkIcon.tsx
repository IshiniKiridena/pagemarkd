interface BookmarkIconProps {
  className?: string;
  color?: string;
}

export function BookmarkIcon({
  className = "w-6 h-8",
  color = "currentColor",
}: BookmarkIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 2h16v28l-8-5-8 5V2z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export default function StarRating({ rating, max = 5, size = "md", showLabel = false }: StarRatingProps) {
  const sizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  const full = Math.floor(rating);
  const partial = rating % 1;

  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < full;
        const halfFilled = !filled && i === full && partial >= 0.5;
        return (
          <svg
            key={i}
            className={`${sizes[size]} ${filled || halfFilled ? "text-amber-400" : "text-[#2A2A32]"}`}
            fill={filled ? "currentColor" : halfFilled ? "url(#half)" : "none"}
            viewBox="0 0 24 24"
            stroke={filled || halfFilled ? "none" : "currentColor"}
            strokeWidth={1.5}
            aria-hidden="true"
          >
            {halfFilled && (
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
            )}
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        );
      })}
      {showLabel && (
        <span className="text-sm text-[#8C95A6] ml-1">{rating.toFixed(1)}</span>
      )}
    </span>
  );
}

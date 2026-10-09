import { site } from "@/lib/site";

// Placeholder mark. Swap the SVG for the real logo when it is ready.
export function Logo() {
  return (
    <span className="flex items-center gap-2 text-olive-dark">
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2c4 4.2 6 7.8 6 11a6 6 0 0 1-12 0c0-3.200 2-6.800 6-11z" fill="currentColor" />
      </svg>
      <span className="font-serif text-2xl font-semibold tracking-[0.2em]">{site.name}</span>
    </span>
  );
}

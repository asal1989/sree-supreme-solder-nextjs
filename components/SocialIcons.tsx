// lucide-react no longer ships brand icons, so LinkedIn/YouTube are small inline SVGs.
export function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12.3c0-2.6-.2-4-.9-4.8-.7-.8-1.5-1-3.2-1.1C15.8 6.3 12 6.3 12 6.3s-3.8 0-5.9.1c-1.7.1-2.5.3-3.2 1.1-.7.8-.9 2.2-.9 4.8v-.6c0 2.6.2 4 .9 4.8.7.8 1.5 1 3.2 1.1 2.1.2 5.9.2 5.9.2s3.8 0 5.9-.2c1.7-.1 2.5-.3 3.2-1.1.7-.8.9-2.2.9-4.8v.6ZM9.9 15.1V9.5l5.2 2.8-5.2 2.8Z" />
    </svg>
  );
}

// Renders a real link when a verified URL is configured, otherwise a
// non-interactive, clearly-labelled placeholder — no invented URLs.
export function SocialIcon({
  href,
  label,
  children,
  className,
}: {
  href: string | null;
  label: string;
  children: React.ReactNode;
  className: string;
}) {
  if (!href) {
    return (
      <span
        aria-label={`${label} (coming soon)`}
        title={`${label} (coming soon)`}
        className={`${className} cursor-not-allowed opacity-40`}
      >
        {children}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Sree Supreme Solder on ${label}`} className={className}>
      {children}
    </a>
  );
}

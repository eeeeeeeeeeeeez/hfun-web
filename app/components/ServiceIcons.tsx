type IconProps = { className?: string };

export function IconWallet({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4" y="9" width="24" height="17" rx="1.5" />
      <path d="M4 13h24" />
      <rect x="19" y="16.5" width="6" height="5" rx="1" fill="currentColor" stroke="none" opacity="0.15" />
      <circle cx="22" cy="19" r="1.1" fill="currentColor" stroke="none" />
      <path d="M8 9V7.5A2.5 2.5 0 0 1 10.5 5H22" />
    </svg>
  );
}

export function IconHelmet({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 22a11 11 0 0 1 22 0" />
      <path d="M4 22h24" />
      <path d="M16 11V6" />
      <path d="M16 6c4 0 6.5 3 7 8" />
    </svg>
  );
}

export function IconCross({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="5" y="5" width="22" height="22" rx="3" />
      <path d="M16 11v10M11 16h10" />
    </svg>
  );
}

export function IconSprout({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 27V15" />
      <path d="M16 15C16 10 12 8 7 8c0 5 3 9 9 9Z" />
      <path d="M16 12c0-4 3-6 8-6 0 4.5-2.5 7.5-8 8" />
    </svg>
  );
}

export function IconHouse({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M5 15 16 6l11 9" />
      <path d="M8 13v13h16V13" />
      <path d="M13 26v-7h6v7" />
    </svg>
  );
}

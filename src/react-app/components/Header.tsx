import React from "react";

interface HeaderProps {
  title: string;
  ariaLabel?: string;
  showSeam?: boolean;
}

export function Header({ title, ariaLabel, showSeam = true }: HeaderProps) {
  return (
    <header className="about-hero" role="banner" aria-label={ariaLabel || title}>
      <img className="about-hero-img" src="/banner.jpg" alt="" aria-hidden="true" />
      <div className="about-hero-shade" />
      {showSeam && (
        <div className="seam seam-hero" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 120 L0 75 Q180 55 360 75 T720 75 T1080 75 T1440 75 L1440 120 Z" />
          </svg>
        </div>
      )}
    </header>
  );
}

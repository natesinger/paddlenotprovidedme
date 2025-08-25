import React from "react";

interface HeaderProps {
  title: string;
  ariaLabel?: string;
  showSeam?: boolean;
}

export function Header({ title, ariaLabel, showSeam = true }: HeaderProps) {
  return (
    <header className="about-hero" role="banner" aria-label={ariaLabel || title}>
      <img 
        className="about-hero-img" 
        src="/banner.jpg" 
        alt="" 
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="about-hero-shade" />
      {showSeam && (
        <div className="seam seam-hero" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0 120 L0 90 Q240 70 480 90 T960 90 T1440 70 L1440 120 Z" />
          </svg>
        </div>
      )}
    </header>
  );
}

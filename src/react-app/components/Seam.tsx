import React from "react";

interface SeamProps {
  type: "treeline" | "forestline";
  variant?: number;
}

export function Seam({ type, variant }: SeamProps) {
  // Define different seam path variations with much more distinct differences
  const seamVariants = {
    treeline: [
      // Variant 0: Classic treeline - gentle waves
      "M0 90 C 120 70 180 90 260 70 C 340 50 420 100 520 80 C 640 55 720 100 840 78 C 920 65 1020 95 1120 72 C 1220 50 1320 88 1440 70 L1440 120 L0 120 Z",
      // Variant 1: Dramatic peaks - sharp, high points
      "M0 95 C 120 45 180 95 260 45 C 340 25 420 105 520 35 C 640 15 720 105 840 33 C 920 15 1020 105 1120 35 C 1220 15 1320 95 1440 25 L1440 120 L0 120 Z",
      // Variant 2: Low valleys - deep, wide curves
      "M0 75 C 120 95 180 75 260 95 C 340 115 420 65 520 95 C 640 115 720 65 840 95 C 920 115 1020 65 1120 95 C 1220 115 1320 75 1440 95 L1440 120 L0 120 Z",
      // Variant 3: Jagged forest - irregular, spiky
      "M0 88 C 80 68 160 88 240 68 C 320 48 400 98 480 78 C 560 58 640 98 720 78 C 800 58 880 98 960 78 C 1040 58 1120 98 1200 78 C 1280 58 1360 98 1440 78 L1440 120 L0 120 Z",
      // Variant 4: Smooth waves - flowing, curved
      "M0 92 C 200 72 400 92 600 72 C 800 52 1000 92 1200 72 C 1400 52 1440 72 1440 72 L1440 120 L0 120 Z"
    ],
    forestline: [
      // Variant 0: Classic forestline - gentle waves
      "M0 90 C 120 70 180 90 260 70 C 340 50 420 100 520 80 C 640 55 720 100 840 78 C 920 65 1020 95 1120 72 C 1220 50 1320 88 1440 70 L1440 120 L0 120 Z",
      // Variant 1: Dramatic peaks - sharp, high points
      "M0 93 C 120 43 180 93 260 43 C 340 23 420 103 520 33 C 640 13 720 103 840 31 C 920 13 1020 103 1120 33 C 1220 13 1320 93 1440 23 L1440 120 L0 120 Z",
      // Variant 2: Low valleys - deep, wide curves
      "M0 77 C 120 97 180 77 260 97 C 340 117 420 67 520 97 C 640 117 720 67 840 97 C 920 117 1020 67 1120 97 C 1220 117 1320 77 1440 97 L1440 120 L0 120 Z",
      // Variant 3: Jagged forest - irregular, spiky
      "M0 89 C 80 69 160 89 240 69 C 320 49 400 99 480 79 C 560 59 640 99 720 79 C 800 59 880 99 960 79 C 1040 59 1120 99 1200 79 C 1280 59 1360 99 1440 79 L1440 120 L0 120 Z",
      // Variant 4: Smooth waves - flowing, curved
      "M0 91 C 200 71 400 91 600 71 C 800 51 1000 91 1200 71 C 1400 51 1440 71 1440 71 L1440 120 L0 120 Z"
    ]
  };

  // Use provided variant or pick a random one
  const selectedVariant = variant !== undefined ? variant : Math.floor(Math.random() * seamVariants[type].length);
  const pathData = seamVariants[type][selectedVariant];

  return (
    <div className={`seam seam-${type}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d={pathData} />
      </svg>
    </div>
  );
}

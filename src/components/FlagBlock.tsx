import React from 'react';
import type { Country } from '../data/album-structure';
import { FIFA_TO_ISO } from '../data/album-structure';

interface FlagBlockProps {
  country: Country;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

const DIMS = {
  hero: { w: 72, h: 50 },
  lg:   { w: 44, h: 30 },
  md:   { w: 36, h: 24 },
  sm:   { w: 28, h: 20 },
};

export default function FlagBlock({ country, size = 'sm' }: FlagBlockProps) {
  const { w, h } = DIMS[size];
  const iso = FIFA_TO_ISO[country.code];

  if (iso) {
    // Real SVG flag from flag-icons — rendered as a CSS background-image sprite.
    // fi-xx class sets background-image; explicit width/height override the default.
    return (
      <span
        className={`fi fi-${iso}`}
        style={{
          display: 'inline-block',
          width: w,
          height: h,
          flexShrink: 0,
          borderRadius: 3,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          verticalAlign: 'middle',
        }}
        aria-label={country.name}
        title={country.name}
      />
    );
  }

  // Fallback: abstract 3-stripe block for special sections (FWC, WP, etc.)
  return (
    <div
      className={`flag flag--${country.dir}`}
      style={{ width: w, height: h, flexShrink: 0, borderRadius: 3 }}
      aria-label={country.name}
      title={country.name}
    >
      <span style={{ background: country.stripes[0] }} />
      <span style={{ background: country.stripes[1] }} />
      <span style={{ background: country.stripes[2] }} />
    </div>
  );
}

import type { APIRoute } from 'astro';
import { STICKERS } from '../../data/stickers';

export const GET: APIRoute = async () => {
  const totalStickers = STICKERS.length;
  const byCountry: Record<string, { country: string; count: number }> = {};
  const distribution: Record<string, number> = { regular: 0, special: 0 };

  for (const s of STICKERS) {
    if (!byCountry[s.countryCode]) {
      byCountry[s.countryCode] = { country: s.country, count: 0 };
    }
    byCountry[s.countryCode].count++;
    distribution[s.sectionType] = (distribution[s.sectionType] || 0) + 1;
  }

  return new Response(
    JSON.stringify({ totalStickers, byCountry, distribution }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
};

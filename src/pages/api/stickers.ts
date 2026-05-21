import type { APIRoute } from 'astro';
import { STICKERS } from '../../data/stickers';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const page        = url.searchParams.get('page');
  const country     = url.searchParams.get('country');
  const countryCode = url.searchParams.get('country_code');
  const section     = url.searchParams.get('section');
  const limitParam  = url.searchParams.get('limit');
  const offsetParam = url.searchParams.get('offset');

  const limit  = Math.min(Number(limitParam)  || 100, 500);
  const offset = Number(offsetParam) || 0;

  let filtered = STICKERS as typeof STICKERS;

  if (page)        filtered = filtered.filter(s => s.pageNumber  === Number(page));
  if (countryCode) filtered = filtered.filter(s => s.countryCode === countryCode.toUpperCase());
  if (section)     filtered = filtered.filter(s => s.sectionType === section);
  if (country) {
    const q = country.toLowerCase();
    filtered = filtered.filter(s => s.country.toLowerCase().includes(q));
  }

  const count = filtered.length;
  const data  = filtered.slice(offset, offset + limit);

  return new Response(JSON.stringify({ data, count, limit, offset }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

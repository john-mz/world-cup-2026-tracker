export const ALBUM_STRUCTURE = {
  totalPages: 112,
  totalStickers: 980,
  sections: [
    {
      name: "We Are Panini",
      pages: "1-1",
      description: "Panini Logo",
      stickersCount: 1,
    },
    {
      name: "FIFA World Cup 2026",
      pages: "2-2",
      description: "Emblemas, mascota, pelota",
      stickersCount: 5,
    },
    {
      name: "Host Countries",
      pages: "3-3",
      description: "Canada, Mexico, USA",
      stickersCount: 3,
    },
    {
      name: "Team Pages",
      pages: "4-99",
      description: "Equipos nacionales (20 láminas por equipo: 18 jugadores + 1 grupal + 1 escudo)",
      stickersCount: 960,
      stickersPerTeam: 20,
      teamCount: 48,
    },
    {
      name: "Special Content",
      pages: "100-112",
      description: "Calendario, mascota, pelota oficial, stickers especiales",
      stickersCount: 11,
    },
  ],
};

export interface Sticker {
  id?: string;
  number: number;
  name: string;
  country: string;
  countryCode: string;
  pageNumber: number;
  sectionType: 'regular' | 'special' | 'coca-cola' | 'mcdonalds';
  positionInPage: number;
  imageUrl?: string;
  createdAt?: string;
}

export interface UserCollection {
  userId: string;
  totalStickers: number;
  hasCount: number;
  missingCount: number;
  percentageComplete: number;
  byCountry: Record<string, { has: number; total: number; percentage: number }>;
  missingList: Sticker[];
}

export interface StickerStats {
  totalStickers: number;
  byCountry: Record<string, number>;
  distribution: {
    regular: number;
    special: number;
    cocaCola: number;
    mcdonalds: number;
  };
}

// Country codes for all 48 teams
export const COUNTRIES = [
  { code: 'ALG', name: 'Algeria' },
  { code: 'ARG', name: 'Argentina' },
  { code: 'AUS', name: 'Australia' },
  { code: 'AUT', name: 'Austria' },
  { code: 'BEL', name: 'Belgium' },
  { code: 'BIH', name: 'Bosnia' },
  { code: 'BRA', name: 'Brazil' },
  { code: 'CAN', name: 'Canada' },
  { code: 'CIV', name: 'Ivory Coast' },
  { code: 'COD', name: 'Congo DR' },
  { code: 'COL', name: 'Colombia' },
  { code: 'CPV', name: 'Cape Verde' },
  { code: 'CRO', name: 'Croatia' },
  { code: 'CUW', name: 'Curaçao' },
  { code: 'CZE', name: 'Czechia' },
  { code: 'ECU', name: 'Ecuador' },
  { code: 'EGY', name: 'Egypt' },
  { code: 'ENG', name: 'England' },
  { code: 'ESP', name: 'Spain' },
  { code: 'FRA', name: 'France' },
  { code: 'GER', name: 'Germany' },
  { code: 'GHA', name: 'Ghana' },
  { code: 'HAI', name: 'Haiti' },
  { code: 'IRN', name: 'Iran' },
  { code: 'IRQ', name: 'Iraq' },
  { code: 'JOR', name: 'Jordan' },
  { code: 'JPN', name: 'Japan' },
  { code: 'KOR', name: 'South Korea' },
  { code: 'KSA', name: 'Saudi Arabia' },
  { code: 'MAR', name: 'Morocco' },
  { code: 'MEX', name: 'Mexico' },
  { code: 'NED', name: 'Netherlands' },
  { code: 'NOR', name: 'Norway' },
  { code: 'NZL', name: 'New Zealand' },
  { code: 'PAN', name: 'Panama' },
  { code: 'PAR', name: 'Paraguay' },
  { code: 'POR', name: 'Portugal' },
  { code: 'QAT', name: 'Qatar' },
  { code: 'RSA', name: 'South Africa' },
  { code: 'SCO', name: 'Scotland' },
  { code: 'SEN', name: 'Senegal' },
  { code: 'SUI', name: 'Switzerland' },
  { code: 'SWE', name: 'Sweden' },
  { code: 'TUN', name: 'Tunisia' },
  { code: 'TUR', name: 'Turkey' },
  { code: 'URU', name: 'Uruguay' },
  { code: 'USA', name: 'United States' },
  { code: 'UZB', name: 'Uzbekistan' },
];

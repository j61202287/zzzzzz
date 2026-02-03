import netflix from "@/assets/netflix.svg";
import amazon from "@/assets/amazon-mgm.webp";
import disney from "@/assets/disney.svg";
import hbo from "@/assets/hbo.svg";
import apple from "@/assets/apple.svg";
import vivamax from "@/assets/vivamax.png";
import marvell from "@/assets/marvell.png";
import a24 from "@/assets/a24.svg";
import blumhouse from "@/assets/blumhouse.svg";
import shudder from "@/assets/shudder.svg";
import type { StaticImageData } from "next/image";
export interface ReusableSwiperTypes {
  id: string; // slug used for routing + lookup
  endpoint: string;
  params: Record<string, string | number>;
  label?: string; // optional UI badge (year, etc.)
  displayName: string; // purely for UI text
  isVisible?: boolean;
  type: string;
  logo?: StaticImageData;
  invert?: boolean;
}
export const movie_endpoints: ReusableSwiperTypes[] = [
  {
    id: "popular-movie",
    displayName: "Popular",
    endpoint: "discover",
    type: "movie",
    params: { sort_by: "popularity.desc" },
  },

  {
    id: "zombie",
    displayName: "Zombie",
    endpoint: "discover",
    type: "movie",
    params: { with_keywords: 186565, sort_by: "popularity.desc" },
  },
  {
    id: "found-footage",
    displayName: "Found Footage Horror",
    endpoint: "discover",
    type: "movie",
    params: { with_keywords: 163053, sort_by: "popularity.desc" },
  },
  {
    id: "psychological-thriller",
    displayName: "Psychological Thrillers",
    endpoint: "discover",
    type: "movie",
    params: { with_keywords: 12565, sort_by: "popularity.desc" },
  },
  {
    id: "slasher-horror",
    displayName: "Slasher Horror",
    endpoint: "discover",
    type: "movie",
    params: { with_keywords: 12339, sort_by: "popularity.desc" },
  },
  {
    id: "time-loop",
    displayName: "Time-Loop",
    endpoint: "discover",
    type: "movie",
    params: { with_keywords: 10854, sort_by: "popularity.desc" },
  },

  {
    id: "time-travel",
    displayName: "Time Travel",
    endpoint: "discover",
    type: "movie",
    params: { with_keywords: 4379, sort_by: "popularity.desc" },
  },
];
export const COMPANIES: ReusableSwiperTypes[] = [
  {
    id: "shudder",
    displayName: "Shudder",
    logo: shudder,
    type: "movie",
    invert: false,
    endpoint: "discover",
    params: {
      with_companies: 142877,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "netflix",
    displayName: "Netflix",
    logo: netflix,
    type: "tv",
    invert: false,
    endpoint: "discover",
    params: {
      with_networks: 213,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "amazon-mgm-studios",
    displayName: "Amazon MGM Studios",
    logo: amazon,
    type: "movie",
    invert: true,
    endpoint: "discover",
    params: {
      with_companies: 210099,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "disney-plus",
    displayName: "Disney+",
    logo: disney,
    type: "tv",
    invert: false,
    endpoint: "discover",
    params: {
      with_networks: 2739,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "hbo",
    displayName: "HBO",
    logo: hbo,
    type: "tv",
    invert: true,
    endpoint: "discover",
    params: {
      with_networks: 49,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "apple",
    displayName: "Apple TV+",
    logo: apple,
    type: "tv",
    invert: true,
    endpoint: "discover",
    params: {
      with_networks: 2552,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "vivamax",
    displayName: "Vivamax",
    logo: vivamax,
    type: "movie",
    invert: false,
    endpoint: "discover",
    params: {
      with_companies: 149142,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "marvel",
    displayName: "Marvel Studios",
    logo: marvell,
    type: "movie",
    invert: true,
    endpoint: "discover",
    params: {
      with_companies: 420,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "a24",
    displayName: "A24",
    logo: a24,
    type: "movie",
    invert: true,
    endpoint: "discover",
    params: {
      with_companies: 41077,
      sort_by: "popularity.desc",
    },
  },
  {
    id: "blumhouse",
    displayName: "Blumhouse",
    logo: blumhouse,
    type: "movie",
    invert: true,
    endpoint: "discover",
    params: {
      with_companies: 3172,
      sort_by: "popularity.desc",
    },
  },
];

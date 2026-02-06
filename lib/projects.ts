import { images } from "./images";

export interface Project {
  slug: string;
  title: string;
  category: "Commercial" | "Residential" | "Retail";
  tagline: string;
  description: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "the-haze-studio",
    title: "The Haze Studio",
    category: "Commercial",
    tagline:
      "Golden hour meets botanical precision. A 12,000 sq ft creative workspace reimagined.",
    description:
      "The Haze Studio is a creative workspace where natural light and botanical design converge. We transformed 12,000 square feet of open-plan office into a living, breathing environment. Select orchids line the perimeter, curated greenery softens the architecture, and every botanical placement was calibrated to the path of afternoon light. The result is a space that feels like permanent golden hour — warm, focused, and deeply human.",
    image: images.projectHazeStudio,
    images: [
      images.goldenLeaves,    // Hero: golden dried leaves
      images.darkOffice,      // Gallery 2: office with city view
      images.orchidCluster,   // Gallery 3: white orchids
    ],
  },
  {
    slug: "villa-serena",
    title: "Villa Serena",
    category: "Residential",
    tagline:
      "A private residence where every botanical element was chosen to complement the architecture and the life within it.",
    description:
      "Villa Serena is a private residence nestled in the hills, where the architecture already spoke a quiet language of warmth and light. Our role was to listen — and then respond with botanical installations that feel inevitable. Orchids in the entryway catch morning light. A sculptural ikebana piece anchors the living room. Trailing greenery softens the stairwell. Every element was chosen not just for beauty, but for the way it makes the home feel alive.",
    image: images.projectVillaSerena,
    images: [
      images.moodyArrangement, // Hero: moody floral arrangement
      images.redFlower,        // Gallery 2: red/burgundy flower
      images.whiteOrchid,      // Gallery 3: white orchid
    ],
  },
  {
    slug: "maison-bloom",
    title: "Maison Bloom",
    category: "Retail",
    tagline:
      "Refined floral installations for a luxury fashion boutique. Minimal, elegant, unforgettable.",
    description:
      "Maison Bloom is a luxury fashion boutique that wanted their physical space to feel as curated as their collections. We designed a rotating series of minimal floral installations — each one a conversation between the season's palette and the architecture of the space. Customers linger longer. The arrangements become talking points. The store feels less like retail and more like a gallery.",
    image: images.projectMaisonBloom,
    images: [
      images.orchidCluster,    // Hero: white orchid cluster
      images.moodyArrangement, // Gallery 2: moody arrangement
      images.goldenLeaves,     // Gallery 3: golden leaves
    ],
  },
  {
    slug: "skyline-terrace",
    title: "Skyline Terrace",
    category: "Commercial",
    tagline: "Biophilic design at altitude. Bringing nature to the 40th floor.",
    description:
      "Skyline Terrace presented a unique challenge: how do you bring the feeling of nature to a glass tower 40 stories above the city? Our answer was vertical gardens, suspended planters, and strategically placed botanical elements that draw the eye from the urban horizon back to the organic. The executive floors now feel grounded — literally — in a way that transforms how people think and work at altitude.",
    image: images.projectSkylineTerrace,
    images: [
      images.darkOffice,     // Hero: dark office with city view
      images.goldenLeaves,   // Gallery 2: golden leaves
      images.bwChair,        // Gallery 3: B&W chair
    ],
  },
  {
    slug: "the-orchid-room",
    title: "The Orchid Room",
    category: "Residential",
    tagline:
      "An intimate space transformed by a single discipline — the art of ikebana.",
    description:
      "The Orchid Room began as a bare meditation space in a private home. The client wanted something that felt both empty and full — a paradox that ikebana resolves beautifully. We designed a series of seasonal arrangements, each using a single stem or branch, positioned to interact with the room's natural light throughout the day. The space is never the same twice, and that's the point.",
    image: images.projectOrchidRoom,
    images: [
      images.whiteOrchid,    // Hero: white orchid on black
      images.orchidCluster,  // Gallery 2: white orchid cluster
      images.redFlower,      // Gallery 3: red flower
    ],
  },
  {
    slug: "atelier-gold",
    title: "Atelier Gold",
    category: "Retail",
    tagline:
      "Where fashion meets flora. A showroom designed to feel like golden hour, always.",
    description:
      "Atelier Gold is a fashion showroom where the brief was simple: make it feel like golden hour, always. We achieved this through warm-toned botanical installations — dried grasses, amber-hued orchids, and sculptural branches — placed to catch and amplify the warm lighting design. The effect is immersive. Visitors describe it as stepping into a photograph.",
    image: images.projectAtelierGold,
    images: [
      images.bwChair,        // Hero: B&W chair piece
      images.goldenLeaves,   // Gallery 2: golden leaves
      images.whiteOrchid,    // Gallery 3: white orchid
    ],
  },
];

// Image Fetching Script for Big Feels
// Run: npx tsx scripts/fetch-images.ts
// Requires: UNSPLASH_ACCESS_KEY in .env.local

import fs from "fs";
import path from "path";
import https from "https";

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const OUTPUT_DIR = path.join(process.cwd(), "public", "images");

interface ImageQuery {
  filename: string;
  query: string;
  orientation: "landscape" | "portrait" | "squarish";
}

const images: ImageQuery[] = [
  {
    filename: "hero-home.jpg",
    query: "golden hour modern interior sunlight plants",
    orientation: "landscape",
  },
  {
    filename: "hero-portfolio.jpg",
    query: "minimal floral arrangement ikebana",
    orientation: "landscape",
  },
  {
    filename: "hero-services.jpg",
    query: "modern office biophilic design sunlight",
    orientation: "landscape",
  },
  {
    filename: "hero-contact.jpg",
    query: "orchid warm light minimal",
    orientation: "landscape",
  },
  {
    filename: "project-1.jpg",
    query: "modern office golden hour plants",
    orientation: "landscape",
  },
  {
    filename: "project-2.jpg",
    query: "luxury home interior orchid",
    orientation: "landscape",
  },
  {
    filename: "project-3.jpg",
    query: "boutique interior minimal flowers",
    orientation: "landscape",
  },
  {
    filename: "project-4.jpg",
    query: "modern architecture biophilic",
    orientation: "landscape",
  },
  {
    filename: "project-5.jpg",
    query: "ikebana minimal arrangement",
    orientation: "landscape",
  },
  {
    filename: "project-6.jpg",
    query: "luxury retail interior plants",
    orientation: "landscape",
  },
  {
    filename: "service-commercial.jpg",
    query: "open plan office sunlight plants",
    orientation: "landscape",
  },
  {
    filename: "service-residential.jpg",
    query: "luxury bedroom minimal botanical",
    orientation: "landscape",
  },
  {
    filename: "service-retail.jpg",
    query: "luxury store interior floral",
    orientation: "landscape",
  },
  {
    filename: "philosophy-bg.jpg",
    query: "golden hour haze warm light",
    orientation: "landscape",
  },
];

async function fetchImage(
  query: string,
  orientation: string
): Promise<string> {
  if (!UNSPLASH_ACCESS_KEY) {
    throw new Error(
      "UNSPLASH_ACCESS_KEY not found. Add it to your .env.local file."
    );
  }

  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=${orientation}&w=1920`;
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  });
  const data = await res.json();
  return data.urls.regular;
}

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            https
              .get(redirectUrl, (redirectResponse) => {
                redirectResponse.pipe(file);
                file.on("finish", () => {
                  file.close();
                  resolve();
                });
              })
              .on("error", reject);
          }
        } else {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            resolve();
          });
        }
      })
      .on("error", reject);
  });
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("Big Feels — Image Fetcher");
  console.log("=========================\n");

  for (const img of images) {
    console.log(`Fetching: ${img.filename} (query: "${img.query}")...`);
    try {
      const imageUrl = await fetchImage(img.query, img.orientation);
      const dest = path.join(OUTPUT_DIR, img.filename);
      await downloadFile(imageUrl, dest);
      console.log(`  Done: ${dest}`);
    } catch (err) {
      console.error(`  Failed: ${err}`);
    }
    // Rate limit: wait 2 seconds between requests
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log("\nAll placeholder images downloaded.");
}

main();

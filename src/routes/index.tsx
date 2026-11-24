import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import share from "@/assets/vrindikaa_share.jpg.asset.json";
import { getRequestOrigin } from "@/lib/origin.functions";

const title = "Vrindikaa Agarbatti | Coming Soon";
const description = "Something beautiful is coming. Vrindikaa Agarbatti — a new journey of fragrance, tradition and purpose begins soon.";

export const Route = createFileRoute("/")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const img = `${loaderData?.origin ?? ""}${share.url}`;
    return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { property: "og:image", content: img },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: "/" }],
    };
  },
  component: Index,
});

function Index() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background">
      <Hero />
      <Footer />
    </main>
  );
}

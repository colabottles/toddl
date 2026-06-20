import type { APIRoute } from "astro";

const PUBLICATION_AT_URI =
  "at://did:plc:gevyqibw5p2xsonkbsbjm5vy/site.standard.publication/3mnqgth7gxo2f";

export const GET: APIRoute = () => {
  return new Response(PUBLICATION_AT_URI, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
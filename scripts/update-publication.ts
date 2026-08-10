import { BskyAgent } from "@atproto/api";
import { config } from "dotenv";
config();

const agent = new BskyAgent({ service: "https://bsky.social" });

await agent.login({
  identifier: process.env.BSKY_IDENTIFIER ?? "",
  password: process.env.BSKY_APP_PASSWORD ?? "",
});

const PUBLICATION_RKEY = "3mnqgth7gxo2f";

await agent.api.com.atproto.repo.putRecord({
  repo: agent.session?.did ?? "",
  collection: "site.standard.publication",
  rkey: PUBLICATION_RKEY,
  record: {
    $type: "site.standard.publication",
    url: "https://toddl.dev",
    name: "Todd Libby",
    description: "Web developer and accessibility advocate. Based in Phoenix, Arizona.",
    preferences: {
      showInDiscover: true,
    },
    basicTheme: {
      $type: "site.standard.theme.basic",
      background: {
        $type: "site.standard.theme.color#rgb",
        r: 17, g: 17, b: 17,       // #111 dark background
      },
      foreground: {
        $type: "site.standard.theme.color#rgb",
        r: 255, g: 255, b: 255,    // #fff white text
      },
      accent: {
        $type: "site.standard.theme.color#rgb",
        r: 125, g: 57, b: 235,     // #7D39EB violet
      },
      accentForeground: {
        $type: "site.standard.theme.color#rgb",
        r: 255, g: 255, b: 255,    // white text on violet button
      },
    },
  },
});

console.log("Publication theme updated.");
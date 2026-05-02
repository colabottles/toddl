import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import toddlDark from "./src/styles/toddl-dark.json"

export default defineConfig({
  integrations: [vue()],
  output: "static",
  markdown: {
    shikiConfig: {
      themes: {
        dark: toddlDark,
      },
      transformers: [
        {
          pre(node) {
            const lang = node.properties["data-language"] || "code"
            node.properties["role"] = "group"
            node.properties["aria-label"] = lang + " code block"
            delete node.properties["tabindex"]
          }
        }
      ]
    },
  },
})

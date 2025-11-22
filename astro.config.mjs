// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "crossinguardocs",
      logo: {
        src: "./src/assets/crystal-circle-logo.svg",
      },
      social: [
        {
          icon: "email",
          label: "Email",
          href: "mailto:brett@crossinguard.dev",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/crossinguard",
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});

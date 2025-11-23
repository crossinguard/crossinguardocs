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
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Coding",
          autogenerate: { directory: "coding" },
        },
        {
          label: "Professional",
          autogenerate: { directory: "professional" },
        },
        {
          label: "Learning",
          autogenerate: { directory: "learning" },
        },
      ],
    }),
  ],
});

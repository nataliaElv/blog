import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Natalia Elvira Astoreca",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "nataliaelv.github.io/blog",
    ignorePatterns: ["private", "templates", ".obsidian", "legacy", "Ideas.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Fraunces",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F8F5F2", // Soft Cream - background
          lightgray: "#9BAA9E", // Light Sage - soft backgrounds, borders
          gray: "#8E8581", // Warm Gray - muted text, borders
          darkgray: "#3A3634", // Warm Charcoal - body text (WCAG AAA: 12.8:1)
          dark: "#2D5F5D", // Deep Teal - headings, primary emphasis
          secondary: "#2D5F5D", // Deep Teal - links, primary CTAs
          tertiary: "#C45F47", // Deep Terracotta - accents, stats, secondary CTAs
          highlight: "rgba(45, 95, 93, 0.15)", // Deep Teal transparency
          textHighlight: "#D4A57488", // Warm Amber transparency
        },
        darkMode: {
          light: "#1A1816", // Dark Background - primary dark background
          lightgray: "#2F2D2A", // Dark Surface Elevated - tooltips, popovers
          gray: "#B8B3AE", // Muted Text - captions, metadata
          darkgray: "#E8E5E2", // Primary Text - main text (WCAG AAA: 12.1:1)
          dark: "#3D7F7D", // Bright Teal - headings, primary emphasis
          secondary: "#3D7F7D", // Bright Teal - links, primary CTAs
          tertiary: "#E89580", // Bright Terracotta - accents, stats
          highlight: "rgba(61, 127, 125, 0.15)", // Bright Teal transparency
          textHighlight: "#E5C49A88", // Light Amber transparency
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

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
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f6f2", // soft warm white with slight cream undertone
          lightgray: "#efeae0", // light warm gray, like natural linen
          gray: "#9a8f7e", // warm taupe - muted elements
          darkgray: "#3d3428", // deep warm brown - body text (WCAG AA: 10.5:1)
          dark: "#1b1612", // almost black with warm undertone - headings (WCAG AAA: 16.8:1)
          secondary: "#3a6b68", // dark teal-green - links (WCAG AA: 5.2:1)
          tertiary: "#b85c3a", // warm terracotta/rust - accents
          highlight: "rgba(58, 107, 104, 0.15)", // teal-green transparency
          textHighlight: "#c9975488", // soft amber transparency
        },
        darkMode: {
          light: "#151312", // deep charcoal with slight green undertone
          lightgray: "#252220", // dark warm gray
          gray: "#8a7d6f", // warm stone - muted elements
          darkgray: "#d4cbbf", // warm sand - body text (WCAG AA: 9.8:1)
          dark: "#f2ebe0", // soft cream - headings (WCAG AAA: 13.5:1)
          secondary: "#5fa09c", // lighter teal-green - links (WCAG AA: 6.5:1)
          tertiary: "#d97854", // brighter terracotta - accents
          highlight: "rgba(95, 160, 156, 0.15)", // teal-green transparency
          textHighlight: "#c9975488", // soft amber transparency
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

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
          light: "#fdf6e3", // base3 - cream background
          lightgray: "#eee8d5", // base2 - lighter cream
          gray: "#657b83", // base00 - for muted elements
          darkgray: "#073642", // base02 - darker for body text (WCAG AA)
          dark: "#002b36", // base03 - darkest for headings (WCAG AAA)
          secondary: "#1c7098", // darker blue - links (WCAG AA compliant: 4.5:1 contrast)
          tertiary: "#2aa198", // cyan - accents
          highlight: "rgba(28, 112, 152, 0.15)", // darker blue with transparency
          textHighlight: "#b5890088", // yellow with transparency
        },
        darkMode: {
          light: "#002b36", // base03 - dark blue-gray background
          lightgray: "#073642", // base02 - lighter dark
          gray: "#839496", // base0 - for muted elements
          darkgray: "#93a1a1", // base1 - softer for body text (WCAG AA: 7.4:1)
          dark: "#eee8d5", // base2 - soft cream for headings (WCAG AAA: 11.7:1)
          secondary: "#268bd2", // blue - links
          tertiary: "#2aa198", // cyan - accents
          highlight: "rgba(38, 139, 210, 0.15)", // blue with transparency
          textHighlight: "#b5890088", // yellow with transparency
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

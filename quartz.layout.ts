import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Contact Me": "https://tally.so/r/wzPBV8",
      X: "https://x.com/natalakiou",
      LinkedIn: "https://www.linkedin.com/in/neastoreca/",
      "Hugging Face": "Hugging Face: https://huggingface.co/nataliaElv",
      GitHub: "https://github.com/nataliaElv",
      RSS: "https://nataliaelv.github.io/blog/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [
    // Component.MobileOnly(Component.Spacer()),
    Component.PageTitle(),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
        { Component: Component.LanguageSelector() },
      ],
      direction: "row",
      gap: "0.8rem",
    }),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.Breadcrumbs(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.Flex({
      components: [
        { Component: Component.Darkmode() },
        { Component: Component.LanguageSelector() },
      ],
      direction: "row",
      gap: "0.8rem",
    }),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    // Component.Backlinks(),
  ],
}

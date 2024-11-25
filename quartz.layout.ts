import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Bluesky: "https://bsky.app/profile/nataliaelv.bsky.social",
      X: "https://x.com/natalakiou",
      LinkedIn: "https://www.linkedin.com/in/neastoreca/",
      "Hugging Face": "Hugging Face: https://huggingface.co/nataliaElv",
      GitHub: "https://github.com/nataliaElv"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.PageTitle(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    // Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
    Component.Darkmode(),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    Component.TagList(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.PageTitle(),
    Component.Breadcrumbs(), 
    Component.ArticleTitle(), 
    Component.ContentMeta()
  ],
  left: [
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
    Component.Darkmode(),
  ],
  right: [],
}

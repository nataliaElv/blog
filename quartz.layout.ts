import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.Backlinks()],
  footer: Component.Footer({
    links: {
      "Contact Me": "https://tally.so/r/wzPBV8",
      Bluesky: "https://bsky.app/profile/nataliaelv.bsky.social",
      X: "https://x.com/natalakiou",
      LinkedIn: "https://www.linkedin.com/in/neastoreca/",
      "Hugging Face": "Hugging Face: https://huggingface.co/nataliaElv",
      GitHub: "https://github.com/nataliaElv",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.Breadcrumbs(), Component.ContentMeta()],
  left: [
    // Component.MobileOnly(Component.Spacer()),
    Component.LanguageAwarePageTitle(),
    Component.Darkmode(),
    Component.LanguageSelector(),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.TagList(),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.Breadcrumbs(), Component.ContentMeta()],
  left: [
    Component.LanguageAwarePageTitle(),
    Component.Darkmode(),
    Component.LanguageSelector(),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}

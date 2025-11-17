import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const LanguageAwarePageTitle: QuartzComponent = ({
  fileData,
  cfg,
  displayClass,
}: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title

  // Detect current language from page slug
  const currentSlug = fileData.slug || ""
  const pathSegments = currentSlug.split("/").filter(Boolean)
  let homeLink = "/"

  // If we're in a language subfolder, link to that language's home
  if (pathSegments.length > 0 && (pathSegments[0] === "en" || pathSegments[0] === "es")) {
    homeLink = `/${pathSegments[0]}/`
  }

  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={homeLink}>{title}</a>
    </h2>
  )
}

LanguageAwarePageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => LanguageAwarePageTitle) satisfies QuartzComponentConstructor

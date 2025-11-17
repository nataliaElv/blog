import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Explorer from "./Explorer"

// Create a language-filtered version of Explorer
export default ((userOpts?: any) => {
  const BaseExplorer = Explorer(userOpts)

  const LanguageFilteredExplorer: QuartzComponent = (props: QuartzComponentProps) => {
    // Detect language from current page slug
    const currentSlug = props.fileData.slug || ""
    const pathSegments = currentSlug.split("/").filter(Boolean)
    let currentLang = "en" // default

    if (pathSegments.length > 0 && (pathSegments[0] === "en" || pathSegments[0] === "es")) {
      currentLang = pathSegments[0]
    }

    // Merge user options with language filter
    const langFilterOpts = {
      ...userOpts,
      filterFn: (node: any) => {
        // Skip tags folder
        if (node.slugSegment === "tags") return false

        // Get the node's language
        const nodeSegments = node.slug.split("/").filter(Boolean)
        if (nodeSegments.length === 0) return false

        const nodeLang = nodeSegments[0]

        // Only show nodes from the current language
        if (nodeLang === "en" || nodeLang === "es") {
          return nodeLang === currentLang
        }

        // Hide everything else
        return false
      }
    }

    // Create a new Explorer with the filtered options
    const FilteredExplorer = Explorer(langFilterOpts)
    return FilteredExplorer(props)
  }

  LanguageFilteredExplorer.css = BaseExplorer.css
  LanguageFilteredExplorer.afterDOMLoaded = BaseExplorer.afterDOMLoaded

  return LanguageFilteredExplorer
}) satisfies QuartzComponentConstructor

// Get the base path from the current URL (e.g., "/blog" for GitHub Pages)
const getBasePath = (): string => {
  const path = window.location.pathname
  // Check if path starts with /blog/ or is /blog
  if (path.startsWith("/blog/") || path === "/blog") {
    return "/blog"
  }
  return ""
}

// Detect current language from URL path
const getCurrentLanguage = (): string => {
  const basePath = getBasePath()
  const path = window.location.pathname
  const pathAfterBase = basePath ? path.substring(basePath.length) : path

  if (pathAfterBase.startsWith("/en/") || pathAfterBase === "/en") return "en"
  if (pathAfterBase.startsWith("/es/") || pathAfterBase === "/es") return "es"
  // Root path has no language prefix
  if (pathAfterBase === "/" || pathAfterBase === "" || pathAfterBase === "/index") return ""
  return "" // default - no language
}

// Get the corresponding path in another language
const getTranslatedPath = (targetLang: string): string => {
  const basePath = getBasePath()
  const currentPath = window.location.pathname
  const currentLang = getCurrentLanguage()

  // If we're already on the target language, do nothing
  if (currentLang === targetLang) {
    return currentPath
  }

  const pathAfterBase = basePath ? currentPath.substring(basePath.length) : currentPath

  // Handle root page
  if (pathAfterBase === "/" || pathAfterBase === "" || pathAfterBase === "/index") {
    return `${basePath}/${targetLang}/`
  }

  // Remove current language prefix
  let pathWithoutLang = pathAfterBase
  if (currentLang && pathAfterBase.startsWith(`/${currentLang}/`)) {
    pathWithoutLang = pathAfterBase.substring(currentLang.length + 1)
  } else if (currentLang && pathAfterBase === `/${currentLang}`) {
    pathWithoutLang = "/"
  }

  // Add new language prefix
  if (pathWithoutLang === "/" || pathWithoutLang === "") {
    return `${basePath}/${targetLang}/`
  }

  return `${basePath}/${targetLang}${pathWithoutLang}`
}

document.addEventListener("nav", () => {
  const wrapper = document.querySelector(".language-selector-wrapper")
  if (!wrapper) return

  const button = wrapper.querySelector(".language-selector")
  const dropdown = wrapper.querySelector(".language-dropdown")

  if (!button || !dropdown) return

  // Toggle dropdown on button click
  const toggleDropdown = (e: Event) => {
    e.stopPropagation()
    dropdown.classList.toggle("show")
  }

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    dropdown.classList.remove("show")
  }

  // Handle language option clicks
  const handleLanguageClick = (e: Event) => {
    e.preventDefault()
    const target = e.currentTarget as HTMLElement
    const targetLang = target.getAttribute("data-lang")

    if (targetLang) {
      const newPath = getTranslatedPath(targetLang)
      window.location.href = newPath
    }
  }

  // Highlight current language
  const currentLang = getCurrentLanguage()
  const options = dropdown.querySelectorAll(".language-option")
  options.forEach((option) => {
    const lang = option.getAttribute("data-lang")
    if (lang === currentLang) {
      option.classList.add("active")
    } else {
      option.classList.remove("active")
    }

    option.addEventListener("click", handleLanguageClick)
    window.addCleanup(() => option.removeEventListener("click", handleLanguageClick))
  })

  button.addEventListener("click", toggleDropdown)
  document.addEventListener("click", closeDropdown)

  window.addCleanup(() => {
    button.removeEventListener("click", toggleDropdown)
    document.removeEventListener("click", closeDropdown)
  })
})

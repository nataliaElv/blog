// Detect current language from URL path
const getCurrentLanguage = (): string => {
  const path = window.location.pathname
  if (path.startsWith("/en/") || path === "/en") return "en"
  if (path.startsWith("/es/") || path === "/es") return "es"
  // Root path has no language prefix
  if (path === "/" || path === "/index") return ""
  return "" // default - no language
}

// Get the corresponding path in another language
const getTranslatedPath = (targetLang: string): string => {
  const currentPath = window.location.pathname
  const currentLang = getCurrentLanguage()

  // If we're already on the target language, do nothing
  if (currentLang === targetLang) {
    return currentPath
  }

  // Handle root page
  if (currentPath === "/" || currentPath === "/index") {
    return `/${targetLang}/`
  }

  // Remove current language prefix
  let pathWithoutLang = currentPath
  if (currentPath.startsWith(`/${currentLang}/`)) {
    pathWithoutLang = currentPath.substring(currentLang.length + 1)
  } else if (currentPath === `/${currentLang}`) {
    pathWithoutLang = "/"
  }

  // Add new language prefix
  if (pathWithoutLang === "/" || pathWithoutLang === "") {
    return `/${targetLang}/`
  }

  return `/${targetLang}${pathWithoutLang}`
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

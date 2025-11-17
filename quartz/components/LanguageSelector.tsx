// @ts-ignore
import languageSelectorScript from "./scripts/languageSelector.inline"
import styles from "./styles/languageSelector.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LanguageSelector: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "language-selector-wrapper")}>
      <button class="language-selector" title="Change language" aria-label="Language selector">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </button>
      <div class="language-dropdown">
        <a href="/en/" class="language-option" data-lang="en">
          <span class="language-name">English</span>
        </a>
        <a href="/es/" class="language-option" data-lang="es">
          <span class="language-name">Español</span>
        </a>
      </div>
    </div>
  )
}

LanguageSelector.beforeDOMLoaded = languageSelectorScript
LanguageSelector.css = styles

export default (() => LanguageSelector) satisfies QuartzComponentConstructor

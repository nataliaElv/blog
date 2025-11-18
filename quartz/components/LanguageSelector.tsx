// @ts-ignore
import languageSelectorScript from "./scripts/languageSelector.inline"
import styles from "./styles/languageSelector.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LanguageSelector: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "language-selector-wrapper")}>
      <button class="language-selector" title="Change language" aria-label="Language selector">
        <span class="material-symbols-outlined">language</span>
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

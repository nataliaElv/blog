// @ts-ignore
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Darkmode: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "darkmode")}>
      <span
        class="material-symbols-outlined dayIcon"
        aria-label={i18n(cfg.locale).components.themeToggle.darkMode}
      >
        light_mode
      </span>
      <span
        class="material-symbols-outlined nightIcon"
        aria-label={i18n(cfg.locale).components.themeToggle.lightMode}
      >
        dark_mode
      </span>
    </button>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor

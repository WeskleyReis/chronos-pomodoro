import styles from './styles.module.css'
import { RouterLink } from '../RouterLink'

export function Footer() {
  return(
      <footer className={styles.footer}>
        <RouterLink
          href='/about-pomodoro/'>Entenda a técnica pomodoro 🍅
        </RouterLink>
        <a href='https://www.linkedin.com/in/weskleyreis/' target='_blank'>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por Weskley Reis
        </a>
      </footer>
  )
}
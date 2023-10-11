import Header from './header'
import NewThing from './new-thing'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Header />

      <ul className={styles.main}>
        <li>
          <NewThing />
        </li>
      </ul>
    </main>

  )
}

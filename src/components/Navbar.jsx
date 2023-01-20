import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <>
      <header>
        <div className={styles.header}>
          <img src="" alt="logo" className={styles.logo} />
          <nav className={styles.navbarContainer}>
              <ul className={styles.listContainer}>
                <a href="#">
                  <li>Inicio</li>
                </a>
                <a href="#contact">
                  <li>Contacto</li>
                </a>
                <a href="#">
                  <li>Productos</li>
                </a>
              </ul>
          </nav>
          <Hamburger className={styles.hamburgerReact} onToggle={handleToggle} />
        </div>
      </header>
      <div className={`${navbarOpen ? styles.showMenu : styles.hideMenu}`}>
        <nav className={styles.modalNavbar}>
          <ul className={styles.modalNavbarItems}>
            <a href="#">
              <li>Inicio</li>
            </a>
            <a href="#contact">
              <li>Contacto</li>
            </a>
            <a href="#">
              <li>Productos</li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  )
}
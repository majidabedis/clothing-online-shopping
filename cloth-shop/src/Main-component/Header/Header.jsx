import styles from './header.module.css'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import Menu from './Menu';
import { Link, Outlet } from "react-router-dom";
import Modall from '../../Router_Component/Modall'

function Header() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.divHead}>
          <div className={styles.div_logo}>
            <p className={styles.logo}>
              NOZAMODA
            </p>
          </div>
          <div className={styles.divSearch}>
            <input type="text" name="search" className={styles.searchinp} />

            <button className={styles.searchBtn}> serach</button>
          </div>
          <div className={styles.div_Menu_icon}>
          < Modall className={styles.menuIcon} />
         <Link to="/form"><IoMdContact className={styles.menuIcon} /></Link>
            <MdDarkMode className={styles.menuIcon} />
          </div>
        </div>

        <Menu />
      </header>
    </>


  )
}

export default Header
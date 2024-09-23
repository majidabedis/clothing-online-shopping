import styles from './collection.module.css'
import { Link, Outlet } from "react-router-dom";
function Collection() {
  return (
    <>
      <Link to='/CollectionPage'>  <div className={styles.div_new_collect}>
        <span className={styles.span_new_collect}>NEW COLLECTION</span>
        <button className={styles.btn_new_collect}>Shop Now</button>
      </div>
      </Link>
      <div className={styles.div_img_new_collect}>
        <div>
          <p className={styles.p_new_season}>A New Season Style  </p>
          <a className={styles.a_new_season} href="#"> Shop Women</a>
        </div>
        <div>
          <p className={styles.p_whats_new}> What's New for girl </p>
          <a className={styles.a_whats_new} href="#">Shop Now</a>
        </div>
        <div>
          <p className={styles.p_blazer}>Blazer & Smart Jackets</p>
          <a className={styles.a_blazer} href="#">Shop Now</a>

        </div>
      </div>
    </>
  )
}

export default Collection
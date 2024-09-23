import styles from './baneer.module.css'
function BaneerTop() {
  return (
    <>
      <div className={styles.div_baneer_top}>
        <p className={styles.p_trending}>Trending :denim</p>
        <a href='#' className={styles.a_shop}>Shop now</a>
      </div>
    </>
  )
}

export default BaneerTop
import styles from './brand.module.css'
function Brand() {
  return (
    <>
      <div>
        <img className='w-11/12 m-auto' src="../../../src/assets/men/slider/banner.jpg" alt="banner" />
      </div>
      <div className={styles.div_brand}>
        <p className={styles.p_brand}>Brands at Next</p>
        <div className='d-flex justify-content-evenly'>
          <img className={styles.img_brand}
            src="../../../src/assets/men/brand/brand1.jpg" alt="1" />
          <img className={styles.img_brand}
            src="../../../src/assets/men/brand/brand2.jpg" alt="2" />
          <img className={styles.img_brand}
            src="../../../src/assets/men/brand/brand3.jpg" alt="3" />
          <img className={styles.img_brand}
            src="../../../src/assets/men/brand/14-02-24-mlp-brands-tile-03-min-2--data.jpg" alt="4" />
        </div>
        <div className='d-flex justify-content-between w-11/12 m-auto mt-5'>
          <img className={styles.img_logo}
            src="../../../src/assets/men/logo/logo-lipsy-data.png" alt="" />
          <img className={styles.img_logo}
            src="../../../src/assets/men/logo/logo-new-balance-data.png" alt="" />
          <img className={styles.img_logo}
            src="../../../src/assets/men/logo/logo-nike-data.png" alt="" />
          <img className={styles.img_logo}
            src="../../../src/assets/men/logo/logo-ralph-lauren-data.png" alt="" />
          <img className={styles.img_logo}
            src="../../../src/assets/men/logo/logo-riverisland-data.png" alt="" />
          <img className={styles.img_logo}
            src="../../../src/assets/men/logo/logo-whitestuff-data.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Brand
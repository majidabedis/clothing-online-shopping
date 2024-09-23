import React from 'react'
import styles from './brandbeauty.module.css';
import img1 from '../../assets/brands pic/BrandBeauty/img1.jpg'
import img2 from '../../assets/brands pic/BrandBeauty/img2.jpg'
import img3 from '../../assets/brands pic/BrandBeauty/img3.jpg'

function BrandBeauty() {
  return (
    <div>
      <div className={styles.div_p_beauty}>
        <p className={styles.p_beauty}>Beauty Brands at Next</p>
      </div>
      <div className={styles.div_img_beauty}>
        <img className={styles.img_beauty} src={img1} alt="img1" />
        <img className={styles.img_beauty} src={img2} alt="img2" />
        <img className={styles.img_beauty} src={img3} alt="img3" />
      </div>
    </div>
  )
}

export default BrandBeauty
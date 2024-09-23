import React from 'react'
import styles from './brandcategori.module.css'
import women from '../../assets/brands pic/BrandCategori/women.jpg'
import men from '../../assets/brands pic/BrandCategori/men.jpg'
import children from '../../assets/brands pic/BrandCategori/children.jpg'
import sport from '../../assets/brands pic/BrandCategori/sport.jpg'

function BrandCategori() {
  return (
    <div>
      <div className={styles.div_p_category}>
        <p className={styles.p_shop_category}>Shop By Category</p>
      </div>
      <div className={styles.div_img_catrgory}>
        <div>
          <img className={styles.img_category} src={women} alt="women" />
          <p className={styles.p_category}>Women</p>
        </div>
        <div>
          <img className={styles.img_category} src={men} alt="men" />
          <p className={styles.p_category}>Men</p>
        </div>
        <div>
          <img className={styles.img_category} src={children} alt="children" />
          <p className={styles.p_category}>Children</p>
        </div>
        <div>
          <img className={styles.img_category} src={sport} alt="sport" />
          <p className={styles.p_category}>sport</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default BrandCategori
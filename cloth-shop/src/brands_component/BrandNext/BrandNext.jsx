import React from 'react'
import styles from './brandnext.module.css'
import banner from '../../assets/brands pic/BrandNext/brand_banner.jpg'
import img1 from '../../assets/brands pic/BrandNext/img1.jpg'
import img2 from '../../assets/brands pic/BrandNext/img2.jpg'
import img3 from '../../assets/brands pic/BrandNext/img3.jpg'
import logo1 from '../../assets/brands pic/BrandNext/logo1.png'
import logo2 from '../../assets/brands pic/BrandNext/logo3.png'
import logo3 from '../../assets/brands pic/BrandNext/logo4.png'
import logo4 from '../../assets/brands pic/BrandNext/logo5.png'
import logo5 from '../../assets/brands pic/BrandNext/logo6.png'
import logo6 from '../../assets/brands pic/BrandNext/logo7.png'

function BrandNext() {
  return (
    <div>
      <div className={styles.div_p_brand_next}>
        <p className={styles.p_brand_next}>Brand at Next</p>
      </div>
      <div className={styles.div_img_banner}>
        <img className={styles.img_banner} src={banner} alt="" />
      </div>
      <div className={styles.div_img_brand}>
        <img className={styles.img_brand} src={img1} alt="" />
        <img className={styles.img_brand} src={img2} alt="" />
        <img className={styles.img_brand} src={img3} alt="" />
      </div>
      <div className={styles.div_img_logo}>
        <img className={styles.img_logo} src={logo1} alt="" />
        <img className={styles.img_logo} src={logo2} alt="" />
        <img className={styles.img_logo} src={logo3} alt="" />
        <img className={styles.img_logo} src={logo4} alt="" />
        <img className={styles.img_logo} src={logo5} alt="" />
        <img className={styles.img_logo} src={logo6} alt="" />
      </div>
      <hr />
    </div>
  )
}

export default BrandNext
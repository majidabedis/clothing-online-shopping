import styles from './brandfeatured.module.css'
import img1 from '../../assets/brands pic/BrandFeauter/img1.jpg'
import img2 from '../../assets/brands pic/BrandFeauter/img2.jpg'
import img3 from '../../assets/brands pic/BrandFeauter/img3.jpg'

function BrandFeatured() {
  return (
    <div>
      <div className={styles.div_p_feature}>
        <p className={styles.p_feature}>Featured</p>
      </div>
      <div className={styles.div_img_feature}>
        <img className={styles.img_feature} src={img1} alt="img" />
        <img className={styles.img_feature} src={img2} alt="img" />
        <img className={styles.img_feature} src={img3} alt="img" />
      </div>
    </div>
  )
}

export default BrandFeatured
import React from 'react'
import styles from './childrenwear.module.css'
import img1 from '../../assets/collectionpic/childrenwear/ch1.jpg'
import img2 from '../../assets/collectionpic/childrenwear/ch2.jpg'
import img3 from '../../assets/collectionpic/childrenwear/ch3.jpg'
import img4 from '../../assets/collectionpic/childrenwear/ch4.jpg'
import banner from '../../assets/collectionpic/childrenwear/banner.jpg'


function ChildrenWear() {
    return (
        <div className={styles.container}>
            <div className={styles.div_p}>
                <p className={styles.p_children_wear}>CHILDRENSWEAR</p>
                <p className={styles.p_collection}> COLLECTION</p>
                <p className={styles.p_for_little}>
                    For little guests with special roles, discover cute and
                    comfy bridesmaid dresses in a range of colours and prints.
                </p>
                <p className={styles.p_shop_girl}>
                    SHOP GIRLS&apos; DRESSES
                </p>
            </div>
            <div className={styles.div_img_children_wear}>
                <img className={styles.img_children_wear} src={img1} alt="" />
                <img className={styles.img_children_wear} src={img2} alt="" />
                <img className={styles.img_children_wear} src={img3} alt="" />
                <img className={styles.img_children_wear} src={img4} alt="" />
            </div>
            <div className={styles.div_banner}>
                <img className={styles.img_banner} src={banner} alt="" />
            </div>
        </div>
    )
}

export default ChildrenWear
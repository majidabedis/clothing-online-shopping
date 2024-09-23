import React from 'react'
import styles from './bird.module.css'
import img1 from '../../assets/collectionpic/brid/p1.jpg'
import img2 from '../../assets/collectionpic/brid/p2.jpg'
import img3 from '../../assets/collectionpic/brid/p3.jpg'
import img4 from '../../assets/collectionpic/brid/n33-148s.webp'
import img5 from '../../assets/collectionpic/brid/u08-256s.webp'


function Brid() {
    return (
        <div className={styles.container}>
            <div className={styles.div_p}>
                <p className={styles.p_Bride}>
                    Bridesmaids! Say &apos;yes&apos; to the
                    dress with our colourful multiway
                </p>
                <a href='#' className={styles.p_styles}>
                    styles, designed to be worn in countless ways.
                </a>
                <p className={styles.p_shop}>Shop The Style</p>
            </div>
            <div className={styles.div_img_brid}>
                <img className={styles.img_brid} src={img1} alt="img" />
                <img className={styles.img_brid} src={img2} alt="img" />
                <img className={styles.img_brid} src={img3} alt="img" />
            </div>
            <div className={styles.div_img_child_bird}>
                <img className={styles.img_child_bird} src={img4} alt="img" />
                <img className={styles.img_child_bird} src={img5} alt="img" />
            </div>
        </div>
    )
}

export default Brid
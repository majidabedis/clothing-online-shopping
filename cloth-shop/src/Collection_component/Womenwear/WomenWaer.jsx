import React from 'react'
import image1 from '../../assets/collectionpic/womenwear/w1.jpg'
import image2 from '../../assets/collectionpic/womenwear/w2.jpg'
import image3 from '../../assets/collectionpic/womenwear/w3.jpg'
import image4 from '../../assets/collectionpic/womenwear/w4.jpg'
import styles from './womenwaer.module.css'

function WomenWaer() {
    return (
        <div className={styles.container}>
                <p className={styles.p_women_wear}>WOMENSWEAR</p>
                <p className={styles.p_made}>
                    Made for dream wedding days, shop gorgeous gowns the bridal
                    entourage will love from Next.
                </p>
            <p className={styles.p_shop}>SHOP WOMENS DRESSES</p>
            <div className={styles.div_img}>
                <img className={styles.img_women_wear} src={image1} alt="image" />
                <img className={styles.img_women_wear} src={image2} alt="image" />
                <img className={styles.img_women_wear} src={image3} alt="image" />
                <img className={styles.img_women_wear} src={image4} alt="image" />
            </div>
        </div>
    )
}

export default WomenWaer
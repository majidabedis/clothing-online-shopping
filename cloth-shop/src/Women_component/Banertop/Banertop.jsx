import styles from './banertop.module.css'
function Banertop() {
    return (
        <>
            <div >
                <p className={styles.p_women}>
                    Women's
                    INSPIRATION HUB
                </p>
                <p className={styles.p_what}>What to wear, which brands to love
                    and how to bring style to your everyday wardrobe.
                </p>
            </div>
            <div className={styles.banertop}>
                <div className={styles.div_the_denim}>
                    <p className={styles.p_the_denim}>
                        the denim editio
                    </p>
                    <p className={styles.p_what_to}>
                    What to wear, which brands to love and how
                     to bring style to your everyday wardrobe.
                    </p>
                    <a className={styles.a_shop_denim} href="">
                    Shop Now
                    </a>
                </div>
            </div>


        </>
    )
}

export default Banertop
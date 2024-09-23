import styles from './waywear.module.css'
function WayWear() {
    return (
        <div className={styles.container}>
            <div className={styles.div_p_header}>
                <p className={styles.p_way_wear}>WAYS TO WEAR NEXT'S</p>
                <p className={styles.p_multiway}>MULTIWAY DRESSES</p>
            </div>
            <div className={styles.div_way_wear}>
                <div className={styles.div_img_ways1}></div>
                <div className={styles.div_img_ways2}>
                    <p className={styles.p_trend}> Trend One</p>
                    <p className={styles.p_footbed}>footbed sandal</p>
                    <p className={styles.p_breath}>
                        breathable and cushioned, these chunky footbed
                        sandals are our forever
                        sunshine-stroll go-to.</p>
                    <p className={styles.shop}>shop now</p>
                </div>
            </div>
        </div>
    )
}

export default WayWear
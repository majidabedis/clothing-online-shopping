import styles from './banner.module.css'

function BannerTop() {
    return (
        <>
            <div className={styles.container}>
                <div className='flex justify-start mt-10 ml-52'>
                    <p className={styles.p_banner}>
                        THE BRIDESMAID EDIT
                    </p>
                </div>
                <div className='flex justify-start mb-16 ml-52'>
                    <a className={styles.a_banner} href="#">Shop Now</a>
                </div>
                <div className={styles.div_banner}>

                </div>
            </div>
        </>
    )
}

export default BannerTop
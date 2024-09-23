import { Link, Outlet } from "react-router-dom";
import styles from './Brand.module.css'
function Brand() {
    return (
        <>
            <Link to='/Brands'> 
              <div className=' w-100 d-flex justify-content-evenly'>
                <div className={styles.div_brand_img1}>
                    <p className={styles.p_allsaints}>AllSaints</p>
                    <button className={styles.btn_allsaint}>shop now</button>
                </div>
                <div className={styles.div_brand_img2}>
                    <p className={styles.p_angel}>Angel & Rocket </p>
                    <button className={styles.btn_angel}>shop now</button>
                </div>
                <div className={styles.div_brand_img3}>
                    <p className={styles.p_love}>Love & Roses</p>
                    <button className={styles.btn_love}>shop now</button>
                </div>
            </div>
                <div className={styles.div_levis}>
                    <p className={styles.p_levis}>Levi’s & You</p>
                    <button className={styles.btn_levis}>shop now</button>
                </div>
                <div className='d-flex justify-content-start m-5'>
                    <p className={styles.p_brand_next}>Brands at Next</p>
                </div>
                <div className='d-flex justify-content-around'>
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-lipsy-data.png" alt="" />
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-loveandroses-data.png" alt="" />
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-new-balance-data.png" alt="" />
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-nike-data.png" alt="" />
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-ralph-lauren-data.png" alt="" />
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-tommyhilfiger-data.png" alt="" />
                    <img className={styles.brand_logo} src="../../src/assets/mainpage/logo-whitestuff-data.png" alt="" />
                </div>
                <div className="d-flex justify-content-center">
                    <div className={styles.div_edited_sprit1}></div>
                    <div className={styles.div_edited_sprit2}>
                        <p className={styles.p_edited}>EDITED</p>
                        <p className={styles.p_the_striped}>THE STRIPES EDIT</p>
                        <p className={styles.p_its_true}>It's true, there's nothing more timeless than the humble stripe.
                            From Breton tops to vertical rugs, this classic pattern is a given
                            in any wardrobe and living space.
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Brand
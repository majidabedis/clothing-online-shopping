import styles from './topcategory.module.css'
function TopCategory() {
    return (
        <>
            <div className='d-flex justify-content-start m-4'>
                <p className={styles.p_top_categori}>Top Categories</p>
            </div>

            <div className="d-flex justify-content-around mt-4 w-100">
                <div>
                    <div className={styles.div_men_category}></div>
                    <p className={styles.p_men}>Mens</p>
                </div>
                <div >
                    <div className={styles.div_child_category}></div>
                    <p className={styles.p_children}>childrens</p>
                </div>
                <div>
                    <div className={styles.div_women_category}></div>
                    <p className={styles.p_women}>Womens</p>
                </div>
            </div>
        </>
    )
}

export default TopCategory
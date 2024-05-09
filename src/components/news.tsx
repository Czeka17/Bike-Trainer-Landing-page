import styles from './news.module.css'
function News(){
    return <section className={styles.news}>
        <div>
            <h2>Aktualności</h2>
            <div className={styles.news__box}>
                <div className={styles.background}>
            <div className={styles['news__box-item']}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim error in fugiat, tenetur obcaecati cum maxime vel porro laudantium!</p></div>
            <div className={styles['news__box-item']}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim error in fugiat, tenetur obcaecati cum maxime vel porro laudantium!</p></div>
            <div className={styles['news__box-item']}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim error in fugiat, tenetur obcaecati cum maxime vel porro laudantium!</p></div>
            <div className={styles['news__box-item']}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim error in fugiat, tenetur obcaecati cum maxime vel porro laudantium!</p></div>
            </div>
            </div>
        </div>
    </section>
}
export default News;
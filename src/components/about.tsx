import styles from './about.module.css'
function About(){
    return <section className={styles.about} id='about'>
       <div className={styles.about__box}>
       <h2>O mnie</h2>
        <div className={styles.about__box__content}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore magni enim repellendus quo commodi autem dolores temporibus, velit incidunt fugiat iste. Nostrum quod animi nobis, rem, dignissimos eos consequatur odio, vitae nam sit illo eaque facere. Amet dolor, ea eligendi delectus vero ipsa iste inventore saepe, a quibusdam et cupiditate!</p>
        <div className={styles.about__box__content__img}><img src='./1.jpg'/></div>
        </div>
       </div>
    </section>
}
export default About;
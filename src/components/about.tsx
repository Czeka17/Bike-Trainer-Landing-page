import styles from './about.module.css'
import Container from './container';
function About(){
    return <section className={styles.about} id='about'>
        <Container title='O mnie'>
       <div className={styles.about__box__content}>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore magni enim repellendus quo commodi autem dolores temporibus, velit incidunt fugiat iste. Nostrum quod animi nobis, rem, dignissimos eos consequatur odio, vitae nam sit illo eaque facere. Amet dolor, ea eligendi delectus vero ipsa iste inventore saepe, a quibusdam et cupiditate!</p>
        <div className={styles.about__box__content__img}><img src='./1.jpg'/></div>
       </div>
        </Container>
    </section>
}
export default About;
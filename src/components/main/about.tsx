import styles from "./about.module.css";
import Container from "../shared/container";
function About() {
	return (
		<section
			className={styles.about}
			id='about'
		>
			<Container title='O mnie'>
				<div className={styles.about__box__content} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-offset="100">
					<div className={styles.about__box__image}><div className={styles.about__box__shape}></div><div className={styles.img}></div></div>
					<p>
					Cześć! Nazywam się Konrad i jestem certyfikowanym trenerem przygotowania motorycznego. Kolarstwem zajmuję się od wielu lat i chcę podzielić się z Tobą swoim doświadczeniem, byśmy mogli wspólnie wnieść Twoją formę jak i komfort życia na wyższy poziom!
					</p>
		
				</div>
			</Container>
		</section>
	);
}
export default About;

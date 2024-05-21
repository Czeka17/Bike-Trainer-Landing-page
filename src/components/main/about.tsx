import styles from "./about.module.css";
import Container from "../shared/container";
function About() {
	return (
		<section
			className={styles.about}
			id='about'
		>
			<Container title='O mnie'>
				<div className={styles.about__box__content}>
	
					<p>
					Cześć! Nazywam się Konrad i jestem certyfikowanym trenerem przygotowania motorycznego. Kolarstwem zajmuję się od wielu lat i chcę podzielić się z Tobą swoim doświadczeniem, byśmy mogli wspólnie wnieść Twoją formę jak i komfort życia na wyższy poziom!
					</p>
					<iframe title="rower" src="https://lottie.host/embed/86a2c040-9aab-40bb-a6e8-56b26a632c15/9kVb38Ry17.json"></iframe>
				</div>
			</Container>
		</section>
	);
}
export default About;

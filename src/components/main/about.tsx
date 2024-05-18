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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
						magni enim repellendus quo commodi autem dolores temporibus, velit
						incidunt fugiat iste. Nostrum quod animi nobis, rem, dignissimos eos
						consequatur odio, vitae nam sit illo eaque facere. Amet dolor, ea
						eligendi delectus vero ipsa iste inventore saepe, a quibusdam et
						cupiditate!
					</p>
					<iframe title="rower" src="https://lottie.host/embed/86a2c040-9aab-40bb-a6e8-56b26a632c15/9kVb38Ry17.json"></iframe>
				</div>
			</Container>
		</section>
	);
}
export default About;

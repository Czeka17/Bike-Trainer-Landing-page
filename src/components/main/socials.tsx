import Container from "../shared/container";
import styles from "./socials.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Socials() {
	return (
		<section className={styles.socials}>
			<Container title='Znajdziesz mnie tutaj'>
				<div className={styles.socials__box__cardContainer} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-offset="100">
			<a href="https://www.facebook.com/profile.php?id=61556006040616" target="_blank">
					<div className={styles.socials__box__card}>
					
						<FaFacebook
							size={58}
							color='	#2c26e1'
						/>
					</div>
					</a>
					<a href="https://www.instagram.com/dlugi_na_rowerze?igsh=ZTZ6MWdsNGV3dHpy&utm_source=qr" target="_blank">
					<div
						className={`${styles.socials__box__card} ${styles["socials__box__card-instagram"]}`}
					>
						<FaInstagram
							size={58}
							color='#E1306C'
						/>
					</div>
					</a>
				</div>
			</Container>
		</section>
	);
}
export default Socials;

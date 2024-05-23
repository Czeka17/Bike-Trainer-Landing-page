import styles from "./header.module.css";

function Header() {

	return (
		<header
			className={styles.header}
			id='home'
		>
			  <div className={styles.container}>
			  <div className={styles.background}></div>
			  <video src={`${process.env.REACT_APP_VIDEOPATH}`}   className={styles.video} autoPlay loop muted controls={false} playsInline>
      </video>
				<div className={styles.title}>
				<h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">KONRAD CZEKAŃSKI <br/> TRENER MOTORYCZNY</h1>
	 <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="150">Razem osiągniemy Twoje rowerowe cele. Spersonalizowane treningi motoryczne dla początkujących i zaawansowanych rowerzystów</p>
				<a href="#about">
				<button className={styles.button} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="300"><span className={styles.button__content}>POZNAJ MNIE</span></button>
				</a>
				</div>
			  </div>

		</header>
	);
}

export default Header;

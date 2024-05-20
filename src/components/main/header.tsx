import styles from "./header.module.css";

function Header() {

	return (
		<header
			className={styles.header}
			id='home'
		>
			  <div className={styles.container}>
			  <div className={styles.background}></div>
			  <video src={`${process.env.REACT_APP_VIDEOPATH}`}   className={styles.video} autoPlay loop muted >
      </video>
				<div className={styles.title}>
				<h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">KONRAD CZEKAŃSKI <br/> TRENER ROWEROWY</h1>
				<a href="#about">
				<button className={styles.button} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="300"><span className={styles.button__content}>ZAŁÓŻ KASK</span></button>
				</a>
				</div>
			  </div>

		</header>
	);
}

export default Header;


import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { FaRegNewspaper } from "react-icons/fa6";

function Header() {

	return (
		<header
			className={styles.header}
			id='home'
		>
			  <div className={styles.container}>
				<Link to={'/blog'} className={styles.blog__button}>BLOG <FaRegNewspaper/></Link>
			  <div className={styles.background}></div>
			  <video  src={'./video.mp4'} className={styles.video} autoPlay loop muted>
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

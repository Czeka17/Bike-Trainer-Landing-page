import { useState } from "react";
import styles from "./nav.module.css";
import { Twirl as Hamburger } from "hamburger-react";
import { MdOutlineDirectionsBike } from "react-icons/md";

function Nav() {
	const [isOpen, setOpen] = useState(false);

	return (
		<nav className={styles.nav}>
			<div className={styles.nav__container}>
				<div>
					<a href="#home" className={styles.logoCon}>< MdOutlineDirectionsBike size={26}/><p>Konrad Czekański</p></a>
				</div>
				<div>
						<ul className={styles.nav__list}>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#about'>O mnie</a>
							</li>
						
							<li>
								<a href='#contact'>Kontakt</a>
							</li>
							<li>
								<a href='#socials'>Sociale</a>
							</li>
						</ul>
				</div>
			</div>
			<div className={styles.nav__mobile}>
				<div className={styles.nav__mobile__hamburger}>
				<Hamburger 
					toggled={isOpen}
					toggle={setOpen}
				/>
				</div>
				<div className={`${styles.nav__mobile__container} ${isOpen && styles.nav__open}`}>
					<a className={styles.logo}>Logo</a>
				<ul className={styles.nav__list__mobile}>
							<li>
								<a href='#home' onClick={() => setOpen(false)}>Home</a>
							</li>
							<li>
								<a href='#about'  onClick={() => setOpen(false)}>O mnie</a>
							</li>
					
							<li>
								<a href='#contact'  onClick={() => setOpen(false)}>Kontakt</a>
							</li>
							<li>
								<a href='#socials'  onClick={() => setOpen(false)}>Sociale</a>
							</li>
						</ul>
					</div>
			</div>
		</nav>
	);
}
export default Nav;

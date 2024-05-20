import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./nav.module.css";
import { Twirl as Hamburger } from "hamburger-react";
function Nav() {
	const [isOpen, setOpen] = useState(false);
	const location = useLocation();
	const isBlogPage = location.pathname.startsWith("/blog");
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__container}>
				<div>
					<a>Logo</a>
				</div>
				<div>
					{isBlogPage ? (
						<ul className={styles.nav__list}>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
						</ul>
					) : (
						<ul className={styles.nav__list}>
							<li>
								<a href='#home'>Home</a>
							</li>
							<li>
								<a href='#about'>O mnie</a>
							</li>
							<li>
								<a href='#blog'>Blog</a>
							</li>
							<li>
								<a href='#contact'>Kontakt</a>
							</li>
						</ul>
					)}
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
				{isBlogPage ? 
				<ul className={styles.nav__list__mobile}>
				<li>
					<Link to='/' onClick={() => setOpen(false)}>Home</Link>
				</li>
				<li>
					<Link to='/blog'  onClick={() => setOpen(false)}>Blog</Link>
				</li>
			</ul>
				:<ul className={styles.nav__list__mobile}>
							<li>
								<a href='#home' onClick={() => setOpen(false)}>Home</a>
							</li>
							<li>
								<a href='#about'  onClick={() => setOpen(false)}>O mnie</a>
							</li>
							<li>
								<a href='#blog'  onClick={() => setOpen(false)}>Blog</a>
							</li>
							<li>
								<a href='#contact'  onClick={() => setOpen(false)}>Kontakt</a>
							</li>
						</ul>}
					</div>
			</div>
		</nav>
	);
}
export default Nav;

import { Link, useLocation } from "react-router-dom";
import styles from "./nav.module.css";

function Nav() {
	const location = useLocation();
    const isBlogPage = location.pathname.startsWith("/blog/");
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__container}>
				<div>
					<a>Logo</a>
				</div>
				<div>
						{isBlogPage ? <ul className={styles.nav__list}>
							<li>
								<Link to='/'>Home</Link>
							</li>
							
						</ul> : <ul className={styles.nav__list}>
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
                            <a href='#contact'>Sociale</a>
							</li>
						</ul>}
				</div>
			</div>
		</nav>
	);
}
export default Nav;

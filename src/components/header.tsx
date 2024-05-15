import { useState, useEffect } from "react";
import styles from "./header.module.css";
import Container from "./shared/container";
function Header() {
	const [activeCards, setActiveCards] = useState([
		"",
		"second",
		"third",
		"fourth",
		"fifth",
	]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveCards((prevCards) => {
				const updatedCards = prevCards.map((card, index) => {
					if (index === 0) {
						return prevCards[prevCards.length - 1];
					} else {
						return prevCards[index - 1];
					}
				});
				return updatedCards;
			});
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<header
			className={styles.header}
			id='home'
		>
			<Container>
				<div className={styles.header__box}>
					<div className={styles["header__box-left"]}>
						<h1 className={styles.header__box__title}>
							Konrad Czekański <br /> Trener Personalny
						</h1>
						<a href='#about'>
							<button className={styles.header__box__button}>
								<span className={styles["header__box__button-content"]}>
									Załóż kask
								</span>
							</button>
						</a>
					</div>
					<div className={styles["header__box-right"]}>
						{activeCards.map((activeCard, index) => (
							<div
								key={index}
								className={`${styles.header__box__card} ${styles[activeCard]}`}
							>
								<img
									src={`./${index + 1}.jpg`}
									alt={`Card ${index + 1}`}
								/>
							</div>
						))}
					</div>
				</div>
			</Container>
		</header>
	);
}

export default Header;

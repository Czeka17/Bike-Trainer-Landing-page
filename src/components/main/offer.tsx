import { useState } from "react";
import Container from "../shared/container";
import styles from "./offer.module.css";
import OfferDetails from "./offerDetails";
import {Offers} from '../../offer'
function Offer() {
	const [selectedOfferIndex, setSelectedOfferIndex] = useState<number | null>(null);

    function moreInfoHandler(index: number) {
        setSelectedOfferIndex(index);
    }

	return (
		<section
			className={styles.offer}
			id='offer'
		>
			<Container title='Oferta'>
				<div className={styles.offer__grid}>
					{Offers.map((offer, index) => {
						return (
							<div
								key={index}
								className={styles.offer__item}
								data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-offset="100"
							>
								<h3 className={styles.offer__title}>{offer.title}</h3>
								<ul className={styles['offer__item-list']}>
									{offer.list.map((item, subIndex) => (
										<li key={subIndex}>{item}</li>
									))}
								</ul>
								<div>
									<h3 className={styles.offer__price}>{offer.price}</h3>
									{offer.available === true ?<a href="#offerDetails"><button className={styles.offer__button} onClick={() => moreInfoHandler(index)}>Więcej</button></a> : <button className={styles['offer__button-disabled']}>Wkrótce</button>}
								</div>
							</div>
						);
					})}
				</div>
			</Container>
            <div className={styles.detailsContainer}>
                        {selectedOfferIndex !== null && <div>
                            <OfferDetails offer={Offers[selectedOfferIndex]} />
                        </div>}
            </div>
		</section>
	);
}
export default Offer;

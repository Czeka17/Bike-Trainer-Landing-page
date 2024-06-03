import { useTransition, animated } from "react-spring";
import styles from './offerDetails.module.css';
import Container from "../shared/container";

type Description = {
    title: string;
    paragraph: string;
};

type OfferType = {
    title: string;
    list: string[];
    price: string;
    description: Description[];
};

type OfferDetailsProps = {
    offer: OfferType;
};

function OfferDetails({ offer }: OfferDetailsProps) {
	const transitions = useTransition(offer, {
		from: { opacity: 0 },
		enter: { opacity: 1},
	  });
    return (
        <>
                    <div className={styles.animatedContainer} id="offerDetails">
                       
                        <div className={styles.offerDetails} >
                      
                            <Container title={offer.title}>
                            {transitions((style, item) => (
            <animated.div style={style} key={item.title}>
              <div>
      
                <div className={styles.offerDetailsBox}>
                  {item.description.map((desc, index) => (
                    <div key={index} className={styles.OfferDetailsBoxItem} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-offset="100">
                      <div className={styles.item}>
                        <h3  className={styles.offerDetails__title}>{desc.title}</h3>
                        <p>{desc.paragraph}</p>
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
              <div>
               <a href="#contact"> <button className={styles.offerDetails__button}>KONTAKT</button></a>
              </div>
            </animated.div>
          ))}
                            </Container>
                        </div>
                    </div>
          
        </>
    );
}

export default OfferDetails;

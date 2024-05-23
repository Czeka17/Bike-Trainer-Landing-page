import Container from "../shared/container";
import styles from './offer.module.css'
function Offer(){
    return <section className={styles.offer}>
       <Container title="Oferta">
       <div className={styles.offer__grid}>
            <div className={styles.offer__item}><p>OFERTA 1</p></div>
            <div className={styles.offer__item}><p>OFERTA 2</p></div>
            <div className={styles.offer__item}><p>OFERTA 3</p></div>
            <div className={styles.offer__item}><p>OFERTA 4</p></div>
        </div>
       </Container>
    </section>
}
export default Offer;
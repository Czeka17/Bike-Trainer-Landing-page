import Container from './container';
import styles from './socials.module.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Socials(){
    return <section className={styles.socials} id='socials'>
        <Container title='Skontaktuj się ze mną'>
     
           <div className={styles.socials__box__cardContainer}>
           <div className={styles.socials__box__card}>
                <FaFacebook size={58} color='	#2c26e1' />
                </div>
                <div className={styles['socials__box__card-instagram']}>
               <FaInstagram size={58} color='#E1306C'/>
                </div>
           </div>
           </Container>
    </section>
}
export default Socials;
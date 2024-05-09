import styles from './socials.module.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Socials(){
    return <section className={styles.socials}>
        <div className={styles.socials__box}>
            <h2>Skontaktuj się ze mną</h2>
           <div className={styles.socials__box__cardContainer}>
           <div className={styles.socials__box__card}>
                <FaFacebook size={58} color='	#2c26e1' />
                </div>
                <div className={styles['socials__box__card-instagram']}>
               <FaInstagram size={58} color='#E1306C'/>
                </div>
           </div>
        </div>
    </section>
}
export default Socials;
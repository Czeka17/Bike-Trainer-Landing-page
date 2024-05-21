import Container from "../shared/container"
import styles from './group.module.css'
function Group(){
    return <section className={styles.group} id="socials">
        <div className={styles.background}></div>
        <div className={styles.group__con}>
        <Container title="Dołącz do społeczności">
            <div className={styles.group__box}>
            <p>Zachęcam Cię do dołączenia do naszej lokalnej grupy na Facebooku gdzie wspólnie umawiamy się na luźne ustawki rowerowe na asfalcie jak i w terenie</p>
            <a href="https://www.facebook.com/share/SLunTGeFVwd4tbWF/?mibextid=K35XfP" target="_blank"><button>DOŁĄCZ</button></a>
            </div>
        </Container>
        </div>
    </section>
}
export default Group
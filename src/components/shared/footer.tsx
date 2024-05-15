import styles from './footer.module.css'
function Footer(){
    const year = new Date().getFullYear()
    return <footer className={styles.footer}>
        <div>
        <p><span>{year}</span> &copy; | Konrad Czekański</p>
        </div>
    </footer>
}
export default Footer;
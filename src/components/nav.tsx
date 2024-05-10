import styles from './nav.module.css'

function Nav(){
    
    return <nav className={styles.nav}>
       
        <div className={styles.nav__container}>
            <div><a>Logo</a></div>
            <div>
                <ul className={styles.nav__list}>
                    <li><a>Home</a></li>
                    <li><a>O mnie</a></li>
                    <li><a>Sociale</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
        </div>
       
    </nav>
}
export default Nav;
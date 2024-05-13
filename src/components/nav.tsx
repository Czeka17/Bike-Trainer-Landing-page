import styles from './nav.module.css'

function Nav(){
    
    return <nav className={styles.nav}>
       
        <div className={styles.nav__container}>
            <div><a>Logo</a></div>
            <div>
                <ul className={styles.nav__list}>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>O mnie</a></li>
                    <li><a href='#blog'>Blog</a></li>
                    <li><a href='#socials'>Sociale</a></li>
                </ul>
            </div>
        </div>
       
    </nav>
}
export default Nav;
import { Link } from 'react-router-dom';
import styles from './nav.module.css'

function Nav(){
    
    return <nav className={styles.nav}>
       
        <div className={styles.nav__container}>
            <div><a>Logo</a></div>
            <div>
                <ul className={styles.nav__list}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>O mnie</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/socials'>Sociale</Link></li>
                </ul>
            </div>
        </div>
       
    </nav>
}
export default Nav;
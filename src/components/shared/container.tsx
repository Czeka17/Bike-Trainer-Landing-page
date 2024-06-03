import { ReactNode } from 'react'
import styles from './container.module.css'

interface ContainerProps{
    children:ReactNode
    title?:string
}

function Container({children,title}:ContainerProps){
    return <div className={styles.layout}>
    {title && <h2 className={styles.title} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-offset="100">{title}</h2>}
   
        <div className={styles.container}>
        <div className={styles.container__box}>{children}</div>
    </div>
    </div>
   
}
export default Container
import { ReactNode } from 'react'
import styles from './container.module.css'

interface ContainerProps{
    children:ReactNode
    title?:string
}

function Container({children,title}:ContainerProps){
    return <div className={styles.layout}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.container}>
        <div className={styles.container__box}>{children}</div>
    </div>
    </div>
   
}
export default Container
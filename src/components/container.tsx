import { ReactNode } from 'react'
import styles from './container.module.css'

interface ContainerProps{
    children:ReactNode
    title?:string
}

function Container({children,title}:ContainerProps){
    return <div className={styles.container}>
        <div className={styles.container__box}>{children}</div>
    </div>
   
}
export default Container
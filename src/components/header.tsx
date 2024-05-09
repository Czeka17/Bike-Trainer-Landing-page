import { useState, useEffect } from 'react';
import styles from './header.module.css';

function Header() {
    const [activeCard, setActiveCard] = useState('second');
    const [activeFirstCard,setActiveFirstCard] = useState('')
    const [activeThirdCard,setActiveThirdCard] = useState('third')
    const [activeFourthCard,setActiveFourthCard] = useState('fourth')
    const [activeFifthCard,setActiveFifthCard] = useState('fifth')
    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFirstCard(prevCard => {
                switch (prevCard) {
                    case 'fifth':
                        return 'fourth';
                    case 'fourth':
                        return 'third';
                    case 'third':
                        return 'second';
                    case 'second':
                        return '';
                    case '':
                        return 'fifth'
                    default:
                        return '';
                }
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveCard(prevCard => {
                switch (prevCard) {
                    case 'second':
                        return '';
                    case '':
                        return 'fifth';
                    case 'fifth':
                        return 'fourth';
                    case 'fourth':
                        return 'third';
                    case 'third':
                        return 'second'
                    default:
                        return 'second';
                }
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveThirdCard(prevCard => {
                switch (prevCard) {
                    case 'third':
                        return 'second';
                    case 'second':
                        return '';
                    case '':
                        return 'fifth';
                    case 'fifth':
                        return 'fourth';
                    case 'fourth':
                        return 'third'
                    default:
                        return 'third';
                }
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFourthCard(prevCard => {
                switch (prevCard) {
                    case 'fourth':
                        return 'third';
                    case 'third':
                        return 'second';
                    case 'second':
                        return '';
                    case '':
                        return 'fifth';
                    case 'fifth':
                        return 'fourth'
                    default:
                        return 'fourth';
                }
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveFifthCard(prevCard => {
                switch (prevCard) {
                    case 'fifth':
                        return 'fourth';
                    case 'fourth':
                        return 'third';
                    case 'third':
                        return 'second';
                    case 'second':
                        return '';
                    case '':
                        return 'fifth'
                    default:
                        return 'fifth';
                }
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <header className={styles.header}>
            
            <div className={styles.header__box}>
            <div className={styles.background}>
                <div className={styles['header__box-left']}>
                    <h1 className={styles.header__box__title}>Konrad Czekański <br/> Trener Personalny</h1>
                   <a href='#about'> <button  className={styles.header__box__button}>Załóż kask</button></a>
                    
                </div>
                <div className={styles['header__box-right']}>
                    <div className={`${styles.header__box__card} ${styles[activeFirstCard]}`}><img src='./1.jpg'/></div>
                    <div className={`${styles.header__box__card} ${styles[activeCard]}`}><img src='./2.jpg'/></div>
                    <div className={`${styles.header__box__card} ${styles[activeThirdCard]}`}><img src='./3.jpg'/></div>
                    <div className={`${styles.header__box__card} ${styles[activeFourthCard]}`}><img src='./4.jpg'/></div>
                    <div className={`${styles.header__box__card} ${styles[activeFifthCard]}`}><img src='./2.jpg'/></div>
                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;

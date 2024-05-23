import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Container from "../shared/container";
import styles from './qna.module.css';

function QnA(){
    const [isOpenList, setIsOpenList] = useState(Array(4).fill(false));

    // Użyj useSpring do stworzenia animacji
    const answerAnimation = useSpring({
        config: { duration: 1000 }, 
        from:{opacity:0, maxHeight:'100px'},
        to:{opacity:1, maxHeight:"500px"}
    });

    function toggleAnswerHandler(index:number){
        setIsOpenList(prevState => {
            const newState = [...prevState]; // Tworzymy kopię aktualnego stanu
            newState[index] = !newState[index]; // Zmieniamy stan dla odpowiedniego indeksu
            return newState;
        });
    }


    return (
        <section className={styles.QnA}>
            <Container title="Częste pytania">
                <div className={styles.QnA__box}>
                {[0, 1, 2, 3].map(index => (
                        <animated.div key={index} style={answerAnimation} className={styles['QnA__box-item']}>
                            <p onClick={() => toggleAnswerHandler(index)}>Lorem ipsum dolor sit amet consectetur.</p>
                            <div>
                                {isOpenList[index] && <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum distinctio, sunt quibusdam iure non ratione soluta ex rerum animi.</p>}
                            </div>
                        </animated.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default QnA;

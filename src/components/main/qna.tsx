import { useState } from "react";
import { useTransition, animated } from "react-spring";
import Container from "../shared/container";
import styles from './qna.module.css';
import { FaChevronDown } from "react-icons/fa";
const QnAData = [
    {
        question:"Ile czasu muszę poświęcić na treningi?",
        answer:"To plan treningowy ma być dostosowany do Ciebie a nie Ty do planu. Podczas konsultacji odpowiednio dobieram ilość godzin w tygodniu, którą możesz poświęcić na trening, biorąc pod uwagę Twój czas na pracę,czas dla siebie,rodziny czy innych spraw prywatnych. "
    },
    {
        question:"Gdzie można się umówić na konsultacje?",
        answer:"Jeśli zależy Ci na spotkaniu twarzą w twarz to po wcześniejszym umówieniu się jestem dostępny na MasterGym siłownia w Wińsku. "
    },
    {
        question:"Na jakim poziomie muszę być aby skorzystać z Twoich usług?",
        answer:"Zajmuje się rekreacyjnymi rowerzystami jak też kolarzami amatorami. Wiek nie ma tutaj znaczenia. Liczą się chęci współpracy."
    },
    {
        question:"Czy potrzebuje miernika mocy, aby zacząć współpracę? ",
        answer:"Jeśli Twoim celem jest ściganie się to zdecydowanie przyda się miernik mocy. A jeśli chcesz po prostu zadbać o swoje zdrowie, to i z samym pulsometrem osiągniemy Twój cel"
    }
]
function QnA(){
    const [isOpenList, setIsOpenList] = useState(Array(4).fill(false));
    const transitions = useTransition(
        isOpenList.map((isOpen, index) => ({ ...QnAData[index], isOpen })),
        {
          keys: item => item.question,
          from: {  opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
          config: { duration: 500 }
        }
      );

    function toggleAnswerHandler(index:number){
        setIsOpenList(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index]; 
            return newState;
        });
    }


    return (
        <section className={styles.QnA}>
        <Container title="Częste pytania">
          <div className={styles.QnA__box} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-offset="100">
            {transitions((style, item, state, index) => (
              <animated.div key={item.question} className={styles['QnA__box-item']} style={style} onClick={() => toggleAnswerHandler(index)}>
                <div className={styles['QnA__box-itemCon']}>
                  <p>{item.question}</p>
                  <FaChevronDown className={`${item.isOpen && styles.openSvg}`} />
                </div>
                <div >
                  {item.isOpen && (
                    <div>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  )}
                </div>
              </animated.div>
            ))}
          </div>
        </Container>
      </section>
    );
}

export default QnA;

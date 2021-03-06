import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../context/ChallengesContext';
import { useContext } from 'react';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge  ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={resetChallenge}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeSuccesedButton}
                        >Completei</button>
                    </footer>
                </div>
            ) : ( <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                   <img src="icons/level-up.svg" alt="Lvel Up" /> 
                   Avance de level completando
                </p>
            </div>)

            }
        </div>
    )
}
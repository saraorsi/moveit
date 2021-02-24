import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/saraorsi.png" alt="Sara Orsi" />
            <div>
                <strong>Sara Orsi</strong>
                <p><img src="icons/level.svg" alt="level"/>Level 1</p>
            </div>
        </div>
    )
}
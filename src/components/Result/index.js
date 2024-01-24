import styles from './Result.module.css';

function Result({result = 0}){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Sonuç</h2>
            <p className={styles.result}>{result == 0 ? "Sonuç burada gözükecek" : result}</p>
        </div>
    )
}

export default Result;
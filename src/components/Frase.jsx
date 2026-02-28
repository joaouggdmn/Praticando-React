import styles from './Frase.module.css';

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Esta é a frase do componente Frase</p>
        </div>
    )
}

export default Frase;
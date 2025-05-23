import img1 from '/assets/images/cotato/entreemcontato.jpg'
import styles from './style.module.css';

function Contact(){
    return(
        <section className='uk-width-expand'>
            <div className={styles.card} uk-grid>
                <div className={`${styles.imgContact}`}>
                    <img src={img1} alt="" />
                </div>
                <div className={styles.cardContet}>
                    <h2>Em caso de emergencia</h2>
                    <p>
                        Para saber mais sobre nossos serviços, valores, ou funcionamento do seu plano, entre em contato com nossa equipe!
                    </p>
                    <p>
                        Em caso de emergenci, trabalhamos <strong>24 horas por dia.</strong>, entre em contato o mais breve com nossa equipe.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact;
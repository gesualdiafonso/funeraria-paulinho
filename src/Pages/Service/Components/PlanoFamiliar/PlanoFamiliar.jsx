import styles from './style.module.css'
import planoImg from '/assets/images/servico/planofamiliar.jpg'

function PlanoFamiliar(){
    return(
        <section className={styles.content}>
            <div className={styles.contentPlan}>
                <div className={styles.contentImg}>
                    <img src={planoImg} alt="" />
                </div>
                <div className={styles.contentCard}>
                    <div className={styles.txtContent}>
                        <h2>Plano Familiar</h2>
                    </div>
                    <div className={styles.card}>
                        <h3>Benefícios</h3>
                        <p>
                        Confira um dos nossos Planos de serviço:
                        </p>
                        <ul className='uk-list uk-list-bullet'>
                            <li><strong>Traslado de até 200km:</strong> garantimos un transporte digno para o local de sepultamento, dentro de 200km.</li>
                            <li><strong>Urna Padrão: </strong>fornecemos uma urna de qualidade para o serviço funerário.</li>
                            <li><strong>Preparação com Arranjos Florais ou Edredom: </strong>Oferecemos a opção de arranjos florarias artificiais ou a escolha de um edredom para a preparação do corpo.</li>
                        </ul>
                        <h4>
                            Además contamos com serviços adicionais que pode estar solicitando.
                        </h4>
                        <button>
                            Solicitar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default PlanoFamiliar;
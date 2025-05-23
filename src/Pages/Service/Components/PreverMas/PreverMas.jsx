import React from 'react';
import preverIMG from '/assets/images/servico/prever+.jpg'
import styles from './style.module.css'

function PreverMas(){
    return(
        <section className={styles.content}>
            <div className={styles.imgContent}>
                <img src={preverIMG} alt="Prever+ Mais assisntecia, Mas melhorias, melhor para você e sua familia" />
            </div>
            <div className={styles.contentCard}>
                <div className={styles.txtContent}>
                    <h2>Prever<span>+</span></h2>
                </div>
                <div className={styles.card}>
                    <p>
                        Com nosso novo sistema do Grupo Prever Itaí, entregamos a você e sua família o PREVER+, disfrutando de mais benefícios:
                    </p>
                    <ul className='uk-list uk-list-bullet'>
                        <li>Desconto em Farmacias, com parceria fechadas.</li>
                        <li>Descontos Educacionais.</li>
                        <li>Descontos de convenios Médicos com nossa parceira APS Multiconvênios em Itaí e Região.</li>
                        <li>Entre Outros...</li>
                    </ul>
                    <h3>
                        Junsto somos mais, Juntos formamos o <span>prever+</span>
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default PreverMas;
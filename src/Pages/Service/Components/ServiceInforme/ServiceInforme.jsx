import React from 'react';
import services from '../../../../data/ServiceInforme/service.json'
import styles from './style.module.css';

const trasladoInfo = {
    image: "/assets/images/servico/traslado.jpg",
    name: "Demás Serviços para seu Plano...",
    list: [
        "<strong>Tanatopraxia</strong>: Serviços opcional para melhor apresentação.",
        "<strong>Serviço de necromaquiagem</strong>: oferecemos necromaquiagem conforme necessário.",
        "<strong>Vendas de Coroas para velórios</strong>: disponibilzamos coroas de flores para homenagem.",
        "<strong>Venda de Conjuntos de Roupa</strong>: Conjuntos de roupas masculinas e femininas.",
        "<strong>Auxílio na documentação</strong>: Fecilitamos o processo de registros de óbito em cartório.",
        "<strong>Traslado Internacional</strong>: trabalhamos com empreas para traslados internacionais."
    ]
}

function ServiceInforme(){
    return(
        <section>
            <div className='uk-slider-container-offset' uk-slider="true">
                <div className='uk-position-relative uk-visible-toggle' tabIndex="-1">
                    <div className='uk-slider-items uk-child-width-1-1@s uk-child-width-1-2@m uk-grid'>
                        {services.map((service, index) => (
                            <div
                                key={`${service.id}${index}`}
                            >

                                <div className={`${styles.cardBody}`}>
                                    <div className={` ${styles.cardImg}`}>
                                        <img src={service.image} alt={service.name}/>
                                    </div>
                                    <div className={`${styles.cardInfo}`}>
                                        <div>
                                            <h3>{service.name}</h3>
                                        </div>
                                        <div>
                                            <p>{service.description}</p>
                                            <p>{service.informes}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <div className={styles.cardBody}>
                                <div className={styles.cardImg}>
                                    <img src={trasladoInfo.image} alt={trasladoInfo.name}/>
                                </div>
                                <div className={styles.cardInfo}>
                                    <h3>{trasladoInfo.name}</h3>
                                    <ul>
                                        {trasladoInfo.list.map((item, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
                    
                </div>

                <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
        </section>
    )
}

export default ServiceInforme;
import React from 'react';
import services from '../../../../data/ServiceCard/service_card.json'; 


function CardService(){
    return(
        <section className='uk-padding'>
            <div className='uk-container'>
                <div className='uk-grid-match uk-child-width-1-1@s uk-child-width-1-2@m uk-flex-center' data-uk-grid>
                    {services.map((service, index) => (
                        <div 
                            key={`${service.id}${index}`}
                            className='uk-card uk-card-default uk-card-hover'
                        >
                            <div className='uk-card-header'>
                                <div class="uk-width-expand uk-text-center">
                                    <h3 class="uk-margin-remove-bottom">{service.name}</h3>
                                </div>
                            </div>
                            <div className='uk-card-body'>
                                <ul className='uk-list uk-list-bullet'>
                                    {service.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div class="uk-card-footer">
                                <a href="#" class="uk-button uk-button-text">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardService;
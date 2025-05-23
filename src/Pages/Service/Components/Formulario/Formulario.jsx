import React from 'react';
import styles from './styles.module.css';

function Formulario(){
    return(
        <section className={`${styles.contato}`}>
            <div className='uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m' data-uk-grid>

                {/* Contato do Escritorio */}
                <div>
                    <div className={styles.boxContat}> 
                        <a href="https://maps.app.goo.gl/3z2fUQpwAKnhQpec6"
                            target='_blank'
                            rel="noopener noreferrer"
                            className='uk-link-text uk-text-bold'
                        >
                            Rua José Floriano 1278 - Centro, Itaí - SP, 18730-011, Brasil
                        </a>
                    </div>
                    <div className={styles.boxDirect}>
                        <p>
                            Telefone: {" "}
                            <a href="tel:+5514997634109" className="uk-link-muted">
                                (14) 99763-4109
                            </a>
                        </p>
                        <p>
                            E-mail:{" "}
                            <a href="mailto:funerariadopaulinho@gmail.com" className="uk-link-muted">
                                funerariadopaulinho@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                {/* FORMULÁRIO */}
                <div>
                    <form className={`uk-form-stacked uk-margin-auto ${styles.form}`}>
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="nome">
                                Nome Completo:
                            </label>
                            <div className="uk-form-controls">
                                <input
                                    className={`uk-input ${styles.inputCustom}`}
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Exemplo: Rubens Nogueira de Souza"
                                    required
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="email">
                                E-mail:
                            </label>
                            <div className="uk-form-controls">
                                <input
                                    className={`uk-input ${styles.inputCustom}`}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Exemplo: rubensnogueira@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="telefone">
                                Telefone:
                            </label>
                            <div className="uk-form-controls">
                                <input
                                    className={`uk-input ${styles.inputCustom}`}
                                    id="telefone"
                                    name="telefone"
                                    type="tel"
                                    placeholder="Digite seu telefone aqui..."
                                    required
                                />
                            </div>
                        </div>

                        <div className="uk-margin-auto">
                            <button className={`uk-button uk-button-primary ${styles.botaoCustom}`} type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Formulario;
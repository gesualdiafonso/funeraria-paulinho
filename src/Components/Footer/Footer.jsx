import React from "react";
import styles from "./styles.module.css";

export default function Footer() {
    return (
        <footer className={`${styles.footer} uk-section uk-section-small`}>
            <div className="uk-container">

                {/* GRID PRINCIPAL */}
                <div className="uk-grid-divider uk-child-width-1-1 uk-child-width-1-3@m" data-uk-grid>

                {/* MAPA DO SITE */}
                <div>
                    <h4 className={styles.titulo}>Mapa do Site</h4>
                    <ul className="uk-list">
                    <li><a href="#inicio" className={styles.link}>Início</a></li>
                    <li><a href="#servicos" className={styles.link}>Serviços</a></li>
                    <li><a href="#planos" className={styles.link}>Planos</a></li>
                    <li><a href="#contato" className={styles.link}>Contato</a></li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div>
                    <h4 className={styles.titulo}>Contato</h4>
                    <ul className={`uk-list ${styles.list}`}>
                        <li>
                            <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: location"></span>
                            Rua José Floriano 1278 - Centro, Itaí - SP, 18730-011
                        </li>
                        <li>
                            <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: phone"></span>
                            <a href="tel:+5514997634109" className={styles.link}>(14) 99763-4109</a>
                        </li>
                        <li>
                            <span className="uk-icon uk-margin-small-right" data-uk-icon="icon: mail"></span>
                            <a href="mailto:grupoprever@preveritai.com" className={styles.link}>
                            grupoprever@preveritai.com
                            </a>
                        </li>
                    </ul>
                </div>

                {/* REDES SOCIAIS */}
                <div>
                    <h4 className={styles.titulo}>Redes Sociais</h4>
                    <div className="uk-flex uk-flex-left uk-flex-middle uk-grid-small" data-uk-grid>
                        <div>
                            <a
                            href="https://www.instagram.com/funeraria_paulinho?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.social}
                            >
                            <span data-uk-icon="icon: instagram"></span>
                            </a>
                        </div>
                        <div>
                            <a
                            href="https://www.facebook.com/people/Funeraria-Paulinho/61556672279230/?ref=_ig_profile_ac&checkpoint_src=any"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.social}
                            >
                            <span data-uk-icon="icon: facebook"></span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>

                {/* COPYRIGHT */}
                <div className="uk-margin-top uk-text-center">
                    <p className={styles.copy}>
                        &copy; {new Date().getFullYear()} Funerária Prever. Todos os direitos reservados.
                    </p>
                    <p className={styles.dev}>
                        Desenvolvido por{" "}
                        <a
                        href="https://afonsodev.app.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        >
                        Afonso Gesualdi
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
import Carousel from "./Components/Carousel/Carousel";
import jazigoImg from "/assets/images/home/jazigo_2.jpg";
import CardService from "./Components/CardService/CardService";
import sofriImg from "/assets/images/home/preocupante.jpg"
import styles from './styles.module.css';


function Home(){
    return(
        <>
            <main className="uk-container container">
                <Carousel />
                <section className={styles.content}>
                    <div className={styles.imgArticle}>
                        <img src={jazigoImg} alt="Imagem de Jazigo com uma Flor simbolizando a Belleza de Homenagear alguém que ame" />
                    </div>
                    <div className={styles.article}>
                        <article>
                            <h2>A jornada além da vida.</h2>
                            <p>"Morrendo o homem porventura tornará a viver?</p>
                            <p>"Sim! Mas e depois? Ao longo dos séculos, uneras pessoas já fizeram a mesma pergunta de Jó!"</p>
                            <q>Jó 14:13</q>
                        </article>

                    </div>
                </section>
                <CardService />
                <section className="uk-flex uk-flex-column uk-flex-row@s uk-flex-center uk-align-center uk-padding">
                    <div className="uk-width-1-2@m uk-flex uk-flex-column uk-align-center uk-flex-center">
                        <h2>Por que ter um plano assistencial Funerário?</h2>
                        <p>Um plano assistencial funerário é uma medida preventiva adotada para planejar antecipadamente os detalhes de um funeral. Oferece benefícios como alívio financeiro, facilidades logísticas, personalização da cerimônia, atendimento pós-morte e flexibilidade de pagamento. Esses planos visam reduzir a carga emocional e financeira sobre os familiares, proporcionando paz de espírito aos indivíduos e garantindo uma despedida digna e respeitosa.</p>
                    </div>
                    <div className="uk-width-1-2@m">
                        <img src={sofriImg} alt="Imagen de Preocupação Retirada desde Funerária do Paulinho" />
                    </div>
                </section>
            </main>
        </>
    )
}
export default Home;
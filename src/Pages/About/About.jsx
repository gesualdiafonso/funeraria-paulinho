import familia from '/assets/images/about/Familia.png'
import styles from './style.module.css';

function About (){
  return (
    <main className='uk-container container'>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>Sobre nós</h2>
          <p>
            Nós da Funerária do Paulinho, acreditamos genuinamente que cada vida é digna de honra e recordação. 
            Nos esforçamos para concretizar os seus pedidos bem como os últimos desejos do seu entes queridos.
          </p>    
          <p>
            Com sede em Itaí desde 1988, temos uma vasta experiência com funerais de qualquer tipo de religião e por 
              isso prestamos serviços personalizados para cada tipo de tradição. 
              Na Funerária do Paulinho, amparamos os nossos clientes como se eles fizessem parte da nossa própria família - com 
              compreensão e compaixão.
          </p>
        </div>
        <div className={styles.aboutimg}>
          <img src={familia} alt="Familia Unida ao Por do Sol o que representa a proposta da Funeraria do Paulinho" />
        </div>
      </section>
      <section className={styles.history}>
        <div className={styles.historyContent}>
          <h2>Nossa História</h2>
        </div>
        <div className={styles.historyInform}>
          <p>
            Somos uma Empresa de Assistência Funerária familiar que está presente na vida de nossos associados desde 1988.
          </p>
          <h3>Nossa Visão</h3>
          <p>
            Ser referência de excelência em serviços funebres, respeitando os credos religiosos, com uma geração de valor 
            para nossos clientes.
          </p>
          <h3>Nossa Missão</h3>
          <p>
            É servir a sua familía com todo o rigor profissional de 3 gerações de experiência, garantindo a 
            excelência na prestação de serviços de homenagem ás memórias de uma vida.
          </p>
        </div>
      </section>
    </main>
  );
}
export default About;
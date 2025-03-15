import styles from "./style.module.css";
import Image from "next/image";
import imageTecnologia from "../public/assets/imagens/home.png";
import ImageNote from "../public/assets/imagens/manDesigner.svg";
import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
export default function Home() {
  return (
    <section className={styles.containerPrincipal}>
      <section className={styles.sectionHome}>
        <div className={styles.containerText}>
          <div className={styles.subContainerText}>
            <div className={styles.welcome}>
              <span className={styles.spanWave}>
                <PiHandWavingFill className={styles.iconHandle} />
              </span>
              Olá , o meu nome é{" "}
            </div>
            <h1 className={styles.name}>Laécio</h1>
            <h3 className={styles.cargo}>Desenvolvedor frontend</h3>
            <button className={styles.button}>
              Conheça meu portifólio{" "}
              <FaArrowRight className={styles.iconArrowRight} />
            </button>
          </div>
        </div>
        <div className={styles.containerImage}>
          <Image
            src={imageTecnologia}
            alt="ilustração  de  uma pessoa  segurando um notebook"
            className={styles.imageUser}
          />
        </div>
      </section>
      <section className={styles.sectionApresentation}>
        <div className={styles.containerImageApresentation}>
          <Image
            src={ImageNote}
            alt="imagem  no  container  de apresentação"
            className={styles.imageUserDesigner}
          />
        </div>
        <div className={styles.containerTextApresentation}>
          <h2 className={styles.subTitleApresentation}> Deixe-me apresentar</h2>
          <div>
           
            Sou um desenvolvedor front-end apaixonado por projetar e codificar.
            Minha especialidade é a criação de interfaces e funcionalidades para
            aplicativos da web usando React.js e Next.js. Você pode conhecer
            mais sobre o meu perfil e o meu trabalho navegando pelo website.
            <p>  P.S. este site é código aberto e está disponível no Github</p>
          
          </div>
          <button>Entre em Contato <IoIosSend  className={styles.iconSend}/></button>
        </div>
      </section>
      <section>Section habilidades</section>
      <section>Section Experiências</section>
      <section>Section Projetos</section>
      <section>Section Contato</section>
    </section>
  );
}

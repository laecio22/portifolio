import styles from "./style.module.css";
import Image from "next/image";
import imageTecnologia from "../public/assets/imagens/home.png";
import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
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
            <button className={styles.button}>Conheça meu portifólio <FaArrowRight className={styles.iconArrowRight}/></button>
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
        <div>text</div>
        <div>outro</div>
      </section>
      <section>Section habilidades</section>
      <section>Section Experiências</section>
      <section>Section Projetos</section>
      <section>Section Contato</section>
    </section>
  );
}

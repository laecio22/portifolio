import styles from "./style.module.css";
import Image from "next/image";
import imageTecnologia from "../public/assets/imagens/home.png";
import ImageNote from "../public/assets/imagens/manDesigner.svg";
import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import CardSkill from "./components/CardSkill/CardSkill";
import imgHtml from '../public/assets/imagens/iconHtml.png';
import imgCss  from '../public/assets/imagens/iconCss.png';
import imgJavascript  from '../public/assets/imagens/iconJavascript.png';
import imgTypescript  from '../public/assets/imagens/iconTypescript.png';
import imgNext  from '../public/assets/imagens/iconNext.png';
import imgTailwind  from '../public/assets/imagens/iconTailwind.png';
import imgStyled  from '../public/assets/imagens/styled-components.svg';
import imgGit  from '../public/assets/imagens/iconGit.png';
import imgVue  from '../public/assets/imagens/iconVue.png';

export default function Home() {

  const skills = [
    {
      title: 'HTML',
      src: imgHtml
    },
    {
      title: 'Javascript',
      src:imgJavascript
    },
    {
      title: 'CSS',
      src:imgCss
    },
    {
      title: 'Typescript',
      src:imgTypescript
    },
    {
      title: 'Tailwind',
      src:imgTailwind
    },
    {
      title: 'Styled-Components',
      src: imgStyled
    },
    {
      title: 'Next',
      src: imgNext
    },
    {
      title: 'Git',
      src: imgGit
    },
    {
      title: 'Vue',
      src: imgVue
    },
  ]
  return (
    <section className='container'>
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
      <section className={`${styles.sectionApresentation} container`}>
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
            <p> P.S. este site é código aberto e está disponível no Github</p>
          </div>        
          <Link href="/contato">
            Entre em Contato <IoIosSend className={styles.iconSend} />
          </Link>
        </div>
      </section>
      <section className={styles.sectionSkills}>
          <h1>Habilidades</h1>
          <div className={`${styles.containerSkills} container`}>
            {skills.map((skill, index)=> {
              return (
                <CardSkill key={index} title={skill.title} imgSkill={skill.src}/>
              )
            })}
          </div>
      </section>
      <section>Section Experiências</section>
      <section>Section Projetos</section>
      <section>Section Contato</section>
    </section>
  );
}

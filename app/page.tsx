'use client'
import styles from "./style.module.css";
import Image from "next/image";
import imageTecnologia from "../public/assets/imagens/home.png";
import ImageNote from "../public/assets/imagens/manDesigner.svg";
import { PiHandWavingFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import CardSkill from "./components/CardSkill/CardSkill";
import imgHtml from "../public/assets/imagens/iconHtml.png";
import imgCss from "../public/assets/imagens/iconCss.png";
import imgJavascript from "../public/assets/imagens/iconJavascript.png";
import imgTypescript from "../public/assets/imagens/iconTypescript.png";
import imgNext from "../public/assets/imagens/iconNext.png";
import imgTailwind from "../public/assets/imagens/iconTailwind.png";
import imgStyled from "../public/assets/imagens/styled-components.svg";
import imgGit from "../public/assets/imagens/iconGit.png";
import imgVue from "../public/assets/imagens/iconVue.png";
import useScrollReveal from "./hooks/useScrollReveal";

export default function Home() {
  useScrollReveal(`.${styles.cardExperiences}`, {  delay: 200 });
  const skills = [
    {
      title: "HTML",
      src: imgHtml,
    },
    {
      title: "Javascript",
      src: imgJavascript,
    },
    {
      title: "CSS",
      src: imgCss,
    },
    {
      title: "Typescript",
      src: imgTypescript,
    },
    {
      title: "Tailwind",
      src: imgTailwind,
    },
    {
      title: "Styled-Components",
      src: imgStyled,
    },
    {
      title: "Next",
      src: imgNext,
    },
    {
      title: "Git",
      src: imgGit,
    },
    {
      title: "Vue",
      src: imgVue,
    },
  ];
  return (
    <section className="container">
      <section className={styles.sectionHome} id="home">
        <div className={styles.containerText}>
          <div className={styles.subContainerText}>
            <div className={styles.welcome}>
              <span className={styles.spanWave}>
                <PiHandWavingFill className={styles.iconHandle} />
              </span>
              Olá , o meu nome é{" "}
            </div>
              <h1 className={`${styles.name} ${styles.typingContainer} `}>Laécio Da Conceição Viana  <span className={styles.cursor}></span> </h1>
             
           
              <h1 className={`${styles.cargo} ${styles.typingContainer}`}>
                Desenvolvedor frontend 
              <span className={styles.cursor}></span>
              </h1>
           
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
      <section
        className={`${styles.sectionApresentation} container`}
        id="about"
      >
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
            <p>
              Sou Laécio, natural de Codó-MA, mas atualmente moro em Altos-PI,
              sou um desenvolvedor front-end apaixonado por projetar e
              codificar.
            </p>
            <p>
              {" "}
              Minha especialidade é a criação de interfaces e funcionalidades
              para aplicativos da web usando React.js.
            </p>
            <p>
              {" "}
              Meu primeiro contato com desenvolvimento web, foi no curso técnico
              em informática no IFPI, onde tive a oportunidade de aprender as
              bases do desenvolvimento web, como HTML, CSS e JavaScript.
            </p>
            <p>
              {" "}
              Desde então, venho me dedicando a aprimorar minhas habilidades e
              conhecimentos na área, buscando sempre estar atualizado com as
              últimas tendências e tecnologias do mercado e buscar sempre
              resolver os problemas. Você pode conhecer mais sobre o meu perfil
              e o meu trabalho navegando pelo website.
            </p>
            <p> P.S. este site é código aberto e está disponível no Github</p>
          </div>
          <Link href="#contact">
            Entre em Contato <IoIosSend className={styles.iconSend} />
          </Link>
        </div>
      </section>
      <section className={styles.sectionSkills}>
        <h1>Habilidades</h1>
        <div className={`${styles.containerSkills} container`}>
          {skills.map((skill, index) => {
            return (
              <CardSkill key={index} title={skill.title} imgSkill={skill.src} />
            );
          })}
        </div>
      </section>
      <section className={styles.sectionExperiences} id="experiences">
        <h1>Experiências</h1>
        <div className={`${styles.containerExperiences} container`}>
          <div className={styles.cardExperiences}>
            <h2>MSB Tecnologia ltda</h2>
            <span>2022-2024</span>
            <p>Desenvolvedor Frontend</p>
            <p>Atividades desenvolvidas:</p>
            <ul>
              <li>
                Definição do layout dos aplicativos e sites desenvolvidos,
                criando uma experiência agradável e intuitiva para os usuários.
              </li>
              <li> Implementação layout seguindo o protótipo. </li>
              <li>Correção de bugs. </li>
              <li>Participação das reuniões de planning, dailys e review. </li>
              <li>
                Manutenção e atualização dos sistemas e aplicações, assegurando
                o bom funcionamento.
              </li>
              <li>
                Implementação de novas funcionalidades e melhorias nos sistemas
                existentes, buscando aprimorar a experiência do usuário.
              </li>
            </ul>
            <p>Principais stacks utilizadas:</p>
            <ul>
              <li>React.js</li>
              <li>Styled-Components</li>
              <li>Tailwindcss</li>
              <li>Git/GitHub</li>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>HTML5 e CSS3</li>
              <li>Vue</li>
            </ul>
          </div>
          <div className={styles.cardExperiences}>
            <h2>Zukk Tecnologia ltda</h2>
            <span>2021-2022</span>
            <p>Desenvolvedor Frontend</p>
            <p>Atividades desenvolvidas:</p>
            <ul>
              <li>Desenvolvimento de interfaces web</li>
              <li>Manutenção de sistemas legados</li>
              <li>Colaboração com equipes de design e backend</li>
              <li>Participação das reuniões de planning, dailys e reviews </li>
            </ul>
            <p>Principais stacks utilizadas:</p>
            <ul>
              <li>React.js</li>
              <li>Git/GitHub</li>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>HTML5 e CSS3</li>
            </ul>
          </div>
          <div className={styles.cardExperiences}>
            <h2>Tribunal Regional Eleitoral do Piauí</h2>
            <span>2018-2019</span>
            <p>Operador de Suporte Técnico</p>
            <p>Atividades desenvolvidas:</p>
            <ul>
              <li>Suporte ao usuário.</li>
              <li> Instalação e Desinstalação de programas e softwares.</li>
              <li>
                Instalação e Desinstalação dos computadores, impressoras e
                outros equipamentos de hardware.
              </li>
              <li>
                Prestação de atendimento técnico, acionando a equipe operacional
                quando necessário, conforme as normas e procedimentos da
                empresa, visando a solução do problema do cliente.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects">Section Projetos</section>
      <section id="contact">Section Contato</section>
    </section>
  );
}

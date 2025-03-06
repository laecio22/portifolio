import styles from './style.module.css';
import Image from 'next/image';
import imageTecnologia from '../public/assets/imagens/home.png'
export default function Home() {
  return (
   <section className={styles.containerPrincipal}>
         
      <section className={styles.sectionHome}>
        <div>
          <div>Olá , o meu nome é </div>
          <div>Laécio</div>
          <div>Desenvolvedor frontend</div>
          <button>Conheça meu portifólio</button>
        </div>
        <div className={styles.containerImage}>
           <Image src={imageTecnologia} alt='ilustração  de  uma pessoa  segurando um notebook' className={styles.imageUser}/>
        </div>
      </section>
      <section>
        section  apresentação
      </section>
      <section>Section habilidades</section>
      <section>Section Experiências</section>
      <section>Section Projetos</section>
      <section>Section Contato</section>
   </section>
    
  );
}

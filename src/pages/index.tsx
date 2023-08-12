import Head from "next/head";
import styles from "../../styles/home.module.scss";
import Image from "next/image";

import homeImg from "../../public/assets/home.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | TO DO</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.home}
            alt="Logo Tarefas+"
            src={homeImg}
            priority
          />
        </div>
        <h1 className={styles.tittle}>
          Sistema feito para você organizar <br />
          seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>Task</span>
          </section>
          <section className={styles.box}>
            <span>List</span>
          </section>
        </div>
      </main>
    </div>
  );
}

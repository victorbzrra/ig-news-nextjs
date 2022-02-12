import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Fevereiro de 2022</time>
            <strong>Título do Post</strong>
            <p>Breve parágrafo do post.</p>
          </a>
        </div>
      </main>
    </>
  );
}
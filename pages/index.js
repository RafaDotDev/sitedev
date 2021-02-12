import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Parallax Template - Materialize</title>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="../styles/materialize.css"
          type="text/css"
          rel="stylesheet"
          media="screen,projection"
        />
        <link
          href="../styles/style.css"
          type="text/css"
          rel="stylesheet"
          media="screen,projection"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rafael, welcome to the jungle!!</h1>
      </main>
    </div>
  );
}

import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tinter 🍷</title>
        <meta name="description" content="Compartí un vinito" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>🍷</div>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={inter.className}>
              Buscá con quien compartir un vinito
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

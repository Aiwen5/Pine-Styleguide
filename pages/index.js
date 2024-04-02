import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Style Guide</title>
        <meta name="description" content="Style Guide for Brand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.p1}>
          <h1>Custom Logo, Logo Variations and Description</h1>
        </section>
        <section className={styles.p2}>
          <h1>Colour Palette, Colour Accessibility</h1>
        </section>
        <section className={styles.p3}>
          <h1>Typography, Imagery, Graphics, etc.</h1>
        </section>
        <section className={styles.p4}>
          <h1>References Page</h1>
        </section>
      </main>
    </>
  );
}

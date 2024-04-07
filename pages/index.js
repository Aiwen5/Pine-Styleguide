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
      <header className={styles.navbar}>
        <nav>
          <ul>
          <li><a href='#'><img className={styles.NavLogo} src='PINE logo.png'></img></a></li>
            <li><a href="/LogoFavicon">Logo & Favicon</a></li>
            <li><a href="/ColorPalette">Colour Palette</a></li>
            <li><a href="/Typography">Typography</a></li>
            <li><a href="/References">References</a></li>
          </ul>
        </nav>
      </header>
      </main>
    </>
  );
}

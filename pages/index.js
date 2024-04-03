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
            <li><a href="#p1">Custom Logo</a></li>
            <li><a href="#p2">Colour Palette</a></li>
            <li><a href="#p3">Typography</a></li>
            <li><a href="#p4">References</a></li>
          </ul>
        </nav>
      </header>
        <section className={styles.p1} id='p1'>
          <h1>Custom Logo, Logo Variations and Description</h1>
          <p>Our logo represent a pine tree thus the use for the word "Pine" as the name suggests the logo is more of a pun while the chef hat aims to show that this is also a food app</p>
          <div className={styles.imageRow}>
            <img className={styles.logoImage} src="/placeholder.jpeg" alt="Logo1" />
            <img className={styles.logoImage} src="/placeholder.jpeg" alt="Logo2" />
            <img className={styles.logoImage} src="/placeholder.jpeg" alt="Logo3" />
          </div>
          <div className={styles.descriptionRow}>
          <p>description: choosing Logo3 hudhiahdiahidhaihdiahdihaihdiahdiahidhiahdiahidhaidhi</p>
          <p>description: choosing Logo3 hudhiahdiahidhaihdiahdihaihdiahdiahidhiahdiahidhaidhi</p>
          <p>description: choosing Logo3 hudhiahdiahidhaihdiahdihaihdiahdiahidhiahdiahidhaidhi</p>
          </div>
          <h3>Favicon</h3>
          <img className={styles.favicon} src="/favicon.ico" alt="Favicon" />
          <p>We chose to simplify the logo by using the recognizable vector image of the pine tree and chef hat which symbolizes the app name PINE and the use by adding the chef hat</p>
        </section>
        <section className={styles.p2} id='p2'>
          <h1>Colour Palette, Colour Accessibility</h1>
          <div className={styles.gridContainer}>
          <div className={styles.imageRow2}>
          <img className={styles.colorImage} src="/Color1.png" alt="Color1" />
          <img className={styles.colorImage} src="/Color2.png" alt="Color2" />
          <img className={styles.colorImage} src="/Color3.png" alt="Color3" />
          <img className={styles.colorImage} src="/Color4.png" alt="Color4" />
          </div>
          <div className={styles.descriptionRow2}>
          <p>description: choosing color</p>
          <p>description: choosing color</p>
          <p>description: choosing color</p>
          <p>description: choosing color</p>
          </div>
          </div>
        </section>
        <section className={styles.p3} id='p3'>
          <h1>Typography, Imagery, Graphics, etc.</h1>
        </section>
        <section className={styles.p4} id='p4'>
          <h1>References Page</h1>
        </section>
      </main>
    </>
  );
}

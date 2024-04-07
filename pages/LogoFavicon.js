import React from 'react';
import styles from '@/styles/LogoFavicon.module.css';

export default function LogoFavicon() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li><a href="/LogoFavicon">Logo & Favicon</a></li>
            <li><a href="/ColorPalette">Colour Palette</a></li>
            <li><a href="/Typography">Typography</a></li>
            <li><a href="/References">References</a></li>
          </ul>
        </nav>
      </header>
    <section className={styles.p1} id='p1'>
          <h1>Custom Logo, Logo Variations and Description</h1>
          <p>Our logo represent a pine tree thus the use for the word "Pine" as the name suggests the logo is more of a pun while the chef hat aims to show that this is also a food app</p>
          <div className={styles.imageRow}>
            <img className={styles.logoImage} src="/PINE logo.png" alt="Logo1" />
            <img className={styles.logoImage} src="/BlackWhite.svg" alt="Logo2" />
            <img className={styles.logoImage} src="/Fancy.svg" alt="Logo3" />
          </div>
          <div className={styles.descriptionRow}>
          <p>Description: Choosing Logo1 hudhiahdiahidhaihdiah dihaihdiahdiahid hiahdiahidhaidhi</p>
          <p>Description: Choosing Logo2 hudhiahdiahidhaihdiah dihaihdiahdiahid hiahdiahidhaidhi</p>
          <p>Description: Choosing Logo3 hudhiahdiahidhaihdiah dihaihdiahdiahid hiahdiahidhaidhi</p>
          </div>
          <h3>Favicon</h3>
          <img className={styles.favicon} src="/favicon.ico" alt="Favicon" />
          <p>We chose to simplify the logo by using the recognizable vector image of the pine tree and chef hat which symbolizes the app name PINE and the use by adding the chef hat</p>
        </section>
        </main>
  );
}
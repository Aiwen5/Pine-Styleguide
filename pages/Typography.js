import React from 'react';
import styles from '@/styles/Typography.module.css';

export default function Typography() {
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
    <section className={styles.p3} id='p3'>
          <h1>Typography, Imagery, Graphics, etc.</h1>
          <div className={styles.container}>
  <div className={styles.row}>
    <div className={`${styles.column} ${styles.BTr16}`}>Body Text: Regular 16</div>
    <div className={`${styles.column} ${styles.BB16}`}>Body Bold: Bold 16</div>
    <div className={`${styles.column} ${styles.SHsb26}`}>Small Header: SemiBold 26</div>
    <div className={`${styles.column} ${styles.ITr15}`}>Instruction Text Regular: Regular 15</div>
  </div>
  <div className={styles.row}>
    <div className={`${styles.column} ${styles.ITb12}`}>Instruction Text Bold: Bold 12</div>
    <div className={`${styles.column} ${styles.LHsb56}`}>Large Header: SemiBold 56</div>
  </div>
    </div>
        </section>
        </main>
  );
}
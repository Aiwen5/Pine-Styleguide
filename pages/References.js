import React from 'react';
import styles from '@/styles/References.module.css';

export default function References() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <nav>
        <ul>
          <li><a href='/'><img className={styles.NavLogo} src='PINE logo.png'></img></a></li>
            <li><a href="/LogoFavicon">Logo & Favicon</a></li>
            <li><a href="/ColorPalette">Colour Palette</a></li>
            <li><a href="/Typography">Typography</a></li>
            <li><a href="/References">References</a></li>
          </ul>
        </nav>
      </header>
    <section className={styles.p4} id='p4'>
          <h1>References, Imagery, Graphics, etc.</h1>
        </section>
        </main>
  );
}
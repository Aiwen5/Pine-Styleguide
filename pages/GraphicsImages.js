import React from 'react';
import styles from '@/styles/GraphicsImages.module.css';

export default function ColourPalette() {
    return (
        <main className={styles.main}>
        <header className={styles.navbar}>
          <nav>
            <ul>
            <li><a href='/'><img className={styles.NavLogo} src='PineLogo.svg'></img></a></li>
              <li><a href="/LogoFavicon">Logo & Favicon</a></li>
              <li><a href="/ColorPalette">Colour Palette</a></li>
              <li><a href="/Typography">Typography</a></li>
              <li><a href="/GraphicsImages">Graphics & Images</a></li>
              <li><a href="/References">References</a></li>
            </ul>
          </nav>
        </header>
        <section className={styles.p5} id='p5'>
        <h1>Imagery, Graphics, etc.</h1>
        </section>
        </main>
  );
}
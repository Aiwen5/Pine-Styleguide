import React from 'react';
import styles from '@/styles/ColorPalette.module.css';

export default function ColourPalette() {
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
          <p>Description: <br></br>This color is used as our Primary Color
            <br></br>
          Chosen Hex Code: <br></br> #2B3F47
          </p>
          <p>Description: <br></br>This color is used as our Secondary Color
            <br></br>
          Chosen Hex Code: <br></br> #EFFFF8
          </p>
          <p>Description: <br></br>This color is used as our Thirdenary Color
            <br></br>
          Chosen Hex Code: <br></br> #C2EEE1
          </p>
          <p>Description: <br></br>This color is used as our Button Color
            <br></br>
          Chosen Hex Code: <br></br> #46757C
          </p>
          </div>
          </div>
        </section>
        </main>
  );
}
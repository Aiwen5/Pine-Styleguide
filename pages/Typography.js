import React from 'react';
import styles from '@/styles/Typography.module.css';

export default function Typography() {
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
    <section className={styles.p3} id='p3'>
          <h1>Typography</h1>
          <div className={styles.container}>
          <div className={styles.Rationale}>
          <h5>Font Selection Rationale:</h5>

<p>For our web application, we carefully selected fonts that align with our branding and enhance the overall design theme. We chose the Poppins font family for its modern and clean appearance, which complements the aesthetic of our application. Here's why we opted for these particular fonts:</p>
<h5>Poppins Font Family:</h5>
    <p>We chose Poppins as our primary font family due to its versatility, readability, and contemporary style. Its rounded corners and balanced proportions provide a friendly and approachable feel, which resonates well with our target audience. Moreover, Poppins offers various font weights and styles, allowing us to maintain consistency across different sections of our application while adding visual interest.</p>
    <h5>Version 2 Font Family:</h5>
    <p>We chose Poppins as our primary font family due to its versatility, readability, and contemporary style. Its rounded corners and balanced proportions provide a friendly and approachable feel, which resonates well with our target audience. Moreover, Poppins offers various font weights and styles, allowing us to maintain consistency across different sections of our application while adding visual interest.</p>  
    </div>
  <div className={styles.row}>
    <div className={`${styles.column} ${styles.BTr16}`}>Body Text: Regular 16</div>
    <div className={`${styles.column} ${styles.BB16}`}>Body Bold: Bold 16</div>
    <div className={`${styles.column} ${styles.ITr15}`}>Instruction Text Regular: Regular 15</div>

    <div className={`${styles.column} ${styles.ITb15}`}>Instruction Text Bold: Bold 15</div>
    <div className={`${styles.column} ${styles.SHsb26}`}>Small Header: SemiBold 26</div>
    <div className={`${styles.column} ${styles.LHsb56}`}>Large Header: SemiBold 56</div>
  </div>
    </div>
        </section>
        </main>
  );
}
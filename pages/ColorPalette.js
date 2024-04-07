import React from 'react';
import styles from '@/styles/ColorPalette.module.css';

export default function ColourPalette() {
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
          <div className={styles.Rationale}>
          <h3>Rationale:</h3>
          <p>Our color palette is hand-selected aiming to resonate with our intended theme and convey specific meanings. The neutral colors we used also ensured that people with color blindness will not have difficulty finding or reading our buttons & text</p>
<p>Our primary color, #2B3F47, is an earthy tone reminiscent of a lush forest, symbolizing our logo theme. This hue serves as the foundation of our brand identity, anchoring our app's visual presence with a sense of groundedness and reliability.</p>

<p>Complementing this primary shade, our secondary color, #EFFFF8, offers a clean contrast. It gives our palette a sense of clarity, cleanliness, and openness, aligning with our commitment to providing users with transparent and wholesome food experiences.</p>

<p>Our thirdenary color, #C2EEE1, introduces a soft, soothing tone. This hue adds depth and dimension to our palette, this soft tone resonates with our app's goal of promoting holistic well-being and mindful consumption. </p>

<p>Lastly, our button color, #46757C, is carefully chosen to command attention and prompt action. Its rich, teal-like hue encourages users to engage with our app's features and explore the culinary possibilities it offers. </p>

<p>Together, our color palette embodies our brand's values and aspirations, friendly to all users who wish to expand and explore their culinary discoveries and experiences.
</p>
</div>
        </section>
        </main>
  );
}
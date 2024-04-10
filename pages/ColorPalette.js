import React from 'react';
import styles from '@/styles/ColorPalette.module.css';

export default function ColourPalette() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li><a href='/'><img className={styles.NavLogo} src='PineLogo.svg' alt='Logo' /></a></li>
            <li><a href="/LogoFavicon">Logo & Favicon</a></li>
            <li><a href="/ColorPalette">Colour Palette</a></li>
            <li><a href="/Typography">Typography</a></li>
            <li><a href="/GraphicsImages">Graphics & Images</a></li>
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
            <p>Charcoal #2B3F47
              <br />Primary Contrast Color
            </p>
            <p>Mint Cream #EFFFF8
              <br />Background Color
            </p>
            <p>Mint Green #C2EEE1
              <br />Graphic Color
            </p>
            <p>Myrtle Green #46757C
              <br />Clicked Button Color
            </p>
          </div>
        </div>
        <div className={styles.Rationale}>
          <h3>Rationale</h3>
          <p>The neutral colors we use ensure that people with color blindness will not have difficulty finding or reading our buttons & text</p>
          <p>Our primary contrast color, #2B3F47, is an earthy tone similar to a forest, playing into the double entendre of our brand name.</p>
          <p>Complementing this primary shade is our background color, #EFFFF8. It gives our palette a sense of cleanliness by creating a clean contrast without using a blinding pure white.</p>
          <p>The graphic color, #C2EEE1, introduces a soft, soothing tone. This hue adds depth and dimension to our palette, and because most items with this color as the background can be clicked, it offers consistent learnability.</p>
          <p>Lastly, our active button color, #46757C, offers noticeable feedback when a button is clicked.</p>
          <p>All together, our color palette embodies our brand's identity while providing accessibility.</p>
          <p>This image displays use of all four colors including buttons, background, and secondary contrast colors.</p>
          <img src='ItemPage.png' className={styles.itemPage}></img>
          
        </div>
        <div className={styles.imageRow2}>
          <img className={styles.colorImage} src="/Contrast 1.png" alt="Contrast1" />
          <img className={styles.colorImage} src="/Contrast 2.png" alt="Contrast2" />
          <img className={styles.colorImage} src="/Contrast 3.png" alt="Contrast3" />
          <img className={styles.colorImage} src="/Contrast 4.png" alt="Contrast4" />
        </div>
        <div className={styles.explanations}>
          <p>All tests pass for text colors which shows that our text is readable and accessable. The only tests not passed are for our graphic color on the background, but because it is not used for text it is fine.</p>
        </div>
      </section>
    </main>
  );
}

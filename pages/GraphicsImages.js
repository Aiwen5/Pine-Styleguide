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
        <h1 className={styles.title}>Imagery, Graphics, etc.</h1>
        <p className={styles.paragraph}>The graphics gallery for our web app includes various elements that are clear and inviting. It has buttons that show when they’re active, a category section to find different foods easily, and elements like drop shadows to make things pop without being too much. We also have a simple navigation bar and easy-to-understand on/off radio buttons. Our mascot is a pine tree with a chef’s hat, tying into our cooking theme. All these graphics are made to be accessible for all our users.

The designs, including some app screen concepts, are inspired by a cool project from Behance, which you can check out for more details.<br /> <a className={styles.link} href="https://www.behance.net/gallery/171396361/DineDash-Food-Delivery-App/modules/967228817">Reference source</a></p>


        </section>
        <div className={styles.images}>
          <img src='Button.png' alt='component image' className={styles.image1}></img>
          <img src='Category.png' alt='component image' className={styles.image2}></img>
          <img src='dropShadow.png' alt='component image' className={styles.image3}></img>
          <img src='ItemPage.png' alt='component image' className={styles.image4}></img>
          <img src='Nav.png' alt='component image' className={styles.image5}></img>
          <img src='radioButton.png' alt='component image' className={styles.image6}></img>
          <img src='ReferencePage1.png' alt='component image' className={styles.image7}></img>
          <img src='ReferencePage2.png' alt='component image' className={styles.image8}></img>
          <img src='Asset 3.svg' alt='component image' className={styles.image9}></img>
        </div>
        </main>
  );
}
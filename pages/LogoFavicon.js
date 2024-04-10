import Image from 'next/image';
import styles from '@/styles/LogoFavicon.module.css';

export default function LogoFavicon() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <a href='/'>
                <img className={styles.NavLogo} src='PineLogo.svg' alt='Logo' />
              </a>
            </li>
            <li><a href='/LogoFavicon'>Logo & Favicon</a></li>
            <li><a href='/ColorPalette'>Colour Palette</a></li>
            <li><a href='/Typography'>Typography</a></li>
            <li><a href="/GraphicsImages">Graphics & Images</a></li>
            <li><a href='/References'>References</a></li>
          </ul>
        </nav>
      </header>
      <section className={styles.p1} id='p1'>
        <h1>Custom Logo, Variations, and Description</h1>
        <p>Our logo represents a double entendre for the term "pining" which means to really want something, and the pine tree. The addition of the chef hat hints at our culinary focus, making it clear that our app is all about food.</p>
        <h3>Logos</h3>
        <div className={styles.imageRow}>
          <div>
            <img className={styles.logoImage} src='/PineLogo.png' alt='Logo1' />
            <p>Default</p>
          </div>
          <div>
            <img className={styles.logoImage2} src='/BlackAndWhiteWM.svg' alt='Logo2' />
            <p>Black & White</p>
          </div>
          <div>
            <img className={styles.logoImage3} src='/FancyWM.svg' alt='Logo3' />
            <p>Fancy</p>
          </div>
          </div>
          <div className={styles.imageRow2}>
          <div>
            <img className={styles.logoImage4} src='/Reversed.svg' alt='Logo4' />
            <p>Reversed</p>
          </div>
          <div>
            <img className={styles.logoImage7} src='/Mono.svg' alt='Logo7' />
            <p>Monochromatic</p>
          </div>
          <div>
            <img className={styles.logoImage6} src='/GrayScale.svg' alt='Logo6' />
            <p>Greyscale</p>
          </div>
          </div>
          <div className={styles.imageRow3}>
          </div>
          <div>
            <img className={styles.logoImage5} src='/Stacked.svg' alt='Logo5' />
            <p>Stacked</p>
          </div>
        <h3>Favicon</h3>
        <div className={styles.imageRow4}>
          <div>
            <img className={styles.favicon1} src='/favicon.ico' alt='Favicon16x16' />
            <p>16x16</p>
          </div>
          <div>
            <img className={styles.favicon2} src='/favicon.ico' alt='Favicon32x32' />
            <p>32x32</p>
          </div>
          <div>
            <img className={styles.favicon3} src='/favicon.ico' alt='Favicon48x48' />
            <p>48x48</p>
          </div>
        </div>
        <p>Some of the main uses of the logo.</p>
        <div className={styles.imageRow}>
        <img className={styles.logoImage8} src='/LogoInsert1.png' alt='Logo8' />
        <img className={styles.logoImage9} src='/LogoInsert2.png' alt='Logo9' />
        </div>
      </section>
    </main>
  );
}

import styles from '@/styles/LogoFavicon.module.css';

export default function LogoFavicon() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <a href='/'>
                <img className={styles.NavLogo} src='PINE logo.png' alt='Logo' />
              </a>
            </li>
            <li><a href='/LogoFavicon'>Logo & Favicon</a></li>
            <li><a href='/ColorPalette'>Colour Palette</a></li>
            <li><a href='/Typography'>Typography</a></li>
            <li><a href='/References'>References</a></li>
          </ul>
        </nav>
      </header>
      <section className={styles.p1} id='p1'>
        <h1>Custom Logo, Logo Variations and Description</h1>
        <p>Our logo represents a pine tree, hence the use of the word "Pine." It's a playful pun, and the addition of the chef hat subtly hints at our culinary focus, making it clear that our app is all about food.</p>
        <h3>Logos</h3>
        <div className={styles.imageRow}>
          <div>
            <img className={styles.logoImage} src='/PINE logo.png' alt='Logo1' />
            <p>Default</p>
          </div>
          <div>
            <img className={styles.logoImage2} src='/PINE logo.png' alt='Logo2' />
            <p>GreyScale</p>
          </div>
          <div>
            <img className={styles.logoImage3} src='/PINE logo.png' alt='Logo3' />
            <p>MonoChromatic</p>
          </div>
          <div>
            <img className={styles.logoImage4} src='/PINE logo.png' alt='Logo4' />
            <p>Reversed</p>
          </div>
        </div>
        <h3>Favicon</h3>
        <img className={styles.favicon} src='/favicon.ico' alt='Favicon' />
        <p>We chose to simplify the logo by using the recognizable vector image of the pine tree and chef hat, symbolizing the app name PINE and the use by adding the chef hat.</p>
      </section>
    </main>
  );
}

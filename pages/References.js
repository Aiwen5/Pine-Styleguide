import React from 'react';
import styles from '@/styles/References.module.css';

export default function References() {
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
    <section className={styles.p4} id='p4'>
          <h1>References</h1>
          <br></br>
        <h2>Coolors</h2>
        <br></br>
        <a href='https://coolors.co/2b3f47-46757c-c2eee1-effff8'>Link to Palette</a>
        <br></br>
        <br></br>
        <h2> Link To Behance Ideas </h2>
        <br></br>
        <a href='https://www.behance.net/gallery/115135995/Food-Delivery-ios-App/modules/673541991'> Behance Gallery General UI</a>
<p>Some aspects are similar to what our initial ideas are with the search bar and listing the food items</p>
<br></br>
<a href='https://www.behance.net/gallery/171396361/DineDash-Food-Delivery-App/modules/967228817'>Behance Galelry Cards UI</a>
<p>Frosted backgrounds for the nav bar are interesting and we could possibly add it to our cards.</p>
<br></br>
<a href='https://www.behance.net/gallery/88249849/Food-mobile-app-ui-design/modules/510381913'>Behance Gallery Nav UI</a>
<p>There is a tab menu with chips that show: Food, Snacks, and Drinks. We could add something similar to this to filter what the user is searching for.</p>
<br></br>
<a href='https://www.behance.net/gallery/176679573/AR-Navigator-Mobile-App-Ui/modules/997884297'>Behance Gallery Mobile UI</a>
<p>Layout: somewhat common in “food finder/delivery” apps with a nav on the bottom with a search and filter menu on top.</p>
<br></br>
<a href='https://www.behance.net/gallery/166648607/Food-Recipe-Mobile-App/modules/939860047'>Behance Typography</a>

<p>The typography on this example is nice so we might use similar styles. The ‘floating nav bar’ is interesting and could be implemented into our app.</p>
        </section>
        </main>
  );
}
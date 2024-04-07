import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Style Guide</title>
        <meta name="description" content="Style Guide for Brand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <header className={styles.navbar}>
        <nav>
          <ul>
          <li><a href='#'><img className={styles.NavLogo} src='PINE logo.png'></img></a></li>
            <li><a href="/LogoFavicon">Logo & Favicon</a></li>
            <li><a href="/ColorPalette">Colour Palette</a></li>
            <li><a href="/Typography">Typography</a></li>
            <li><a href="/References">References</a></li>
          </ul>
        </nav>
      </header>
      <section className={styles.About}>
      <h1> PINE StyleGuide </h1>
      <h4>Created by: Daniel Der & Evan Shatz</h4>
      <h2>About PINE</h2>
      <p>
      At PINE, we get it – those times when cooking or picking a place to eat feels like too much. That's why we've got your back with a solution.</p>

<p>PINE is the answer for those lazy, hungry moments. It's your one-stop web app to find great places to eat out or cook up tasty recipes, all while sticking to your budget. No more settling for fast food or sad instant noodles.</p>

<p>Here's how we make it easy:</p>

<p>1. Dining Out: Pick your craving – Asian, Western, fast food, noodles, desserts, and more. PINE shows you nearby spots that match your taste, so you can satisfy those hunger pangs in no time.</p>

<p>2. Recipe Finder: When cooking at home sounds better, use our recipe finder. Tell us what you've got, and we'll suggest easy, delicious recipes tailored to your ingredients and time.</p>

<p>At PINE, we're all about making dining and cooking hassle-free and enjoyable. Say goodbye to food dilemmas and hello to effortless eating with PINE – because every meal should be a delight, no matter how lazy or hungry you feel.</p>
      </section>
      </main>
    </>
  );
}

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
At PINE, we understand those nights when the thought of cooking or deciding on a dining destination feels like an insurmountable task, especially when hunger strikes and time is short. That's why we've crafted a solution to rescue you from the clutches of mundane meals and uninspired takeout choices.</p>

<p>PINE is your go-to web app for those lazy yet hungry moments, providing a seamless experience to discover great dining options or whip up delicious recipes with ease, all while staying within your budget. No more settling for another round of fast food or resorting to a sad cup of instant noodles.</p>

<p>Our platform simplifies the decision-making process by offering two distinct features tailored to your cravings:</p>

<p>1. Dining Out: With PINE, exploring dining options has never been easier. Simply select your desired cuisine category – whether it's Asian delights with nuanced subcategories, hearty Western fare, quick-fix fast food, comforting noodle dishes, indulgent desserts, and beyond. PINE then curates a list of local and nearby eateries within your chosen category, ensuring you find the perfect spot to satisfy your cravings.</p>

<p>2. Recipe Finder: For those moments when cooking at home seems like the better option, PINE has you covered. Our recipe finder feature lets you input the ingredients you have on hand or fill out a simple form detailing your preferences. Within moments, you'll discover a variety of simple yet mouthwatering recipes tailored to your available ingredients and time constraints, ranging from quick fixes to more elaborate dishes.</p>

<p>At PINE, we're dedicated to enhancing your dining experiences and culinary adventures, one delicious recommendation at a time. Say goodbye to food dilemmas and hello to effortless enjoyment with PINE – because every meal should be a delightful experience, no matter how lazy or hungry you may feel.</p>
      </section>
      </main>
    </>
  );
}

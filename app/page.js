// pages/index.js

import Head from 'next/head';
import Map from './components/Map';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Map with React Leaflet</title>
        <meta name="description" content="Map with markers using React Leaflet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Map with React Leaflet
        </h1>
        <Map />
      </main>
    </div>
  );
}

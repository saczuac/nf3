import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Search from '../components/search'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NF3</title>
        <meta name="description" content="NFT Search Site" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">NF3</a>
        </h1>

        <p className={styles.description}>
          Get started by searching a NFT through the multiple blockchains {' '} 🌳
        </p>
        <Search />
      </main>

      <footer className={styles.footer}>
        <p>
          Made with ❤️ by {' '} <b>saczuac</b>
        </p>

      </footer>
    </div>
  )
}

export default Home

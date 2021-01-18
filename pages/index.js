import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()
  console.log(process.env.SPOTIFY_CLIENT_ID)
  if (session) {
    Router.push('/app')
  }
  return (

    <div className={styles.container}>
      <Head>
        <title>Spotifight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Spotifight
        </h1>

        <p className={styles.description}>
          Create a playlist and let your party partners fight for their songs!
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Connect your spotify account &rarr;</h3>
            <p>So we can find your favorite songs.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Create a new playlist for your party  &rarr;</h3>
            <p>Share the link of your new playlist with your friends.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3> Let your friends choose their weapons &rarr;</h3>
            <p>
              Each person has only one choice.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3> For each song, a battle will happen &rarr;</h3>
            <p>
              Decide witch song will be the winner.
            </p>
          </a>
        </div>

        <button onClick={signIn} className={styles.button_primary}>Start now</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

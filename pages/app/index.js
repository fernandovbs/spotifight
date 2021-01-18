import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../../styles/App.module.css'
import Router from 'next/router'
import Menu from './Menu'

import {
  signIn, 
  signOut,
  useSession
} from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()
  
  useEffect(() => {
    if (!session) {
        Router.push('/')
      }    
  },[])
   console.log(session)
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotifight</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Create your party playlist
        </h1>
        <div className="field-group">
            <input type='text' className={styles.search_bar}/><button className={styles.button_primary}>go</button>
        </div>
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

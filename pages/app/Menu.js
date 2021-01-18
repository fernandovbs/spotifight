import styles from '../../styles/App.module.css'
import {
    signIn, 
    signOut,
    useSession
  } from 'next-auth/client'

export default function Menu(){
    return (
        <header className={styles.header}> 
        <a className={styles.logo}>
            <img src="/logo.svg" alt="Vercel Logo" className={styles.logo} fill="#FFF" />
            <span>Spotifight</span>
        </a>
        </header>
    )
}
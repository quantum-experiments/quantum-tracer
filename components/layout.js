import Head from 'next/head'
import { basePath } from '../next.config'
import styles from './layout.module.css'

export const siteTitle = 'Quantum Tracer'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href={basePath + "/favicon.ico"} />
      </Head>

      <div className={styles.main}>
        {children}
      </div>

      <div className={styles.footer}>
        <a
          href={basePath}
          rel="noopener noreferrer"
        >
          {' '}
          <img src="https://raw.githubusercontent.com/guenp/quantum-tracer/main/public/quantum.png" alt="Microsoft Azure Quantum" className={styles.logo} />
        </a>
      </div>
    </div>
  )
}
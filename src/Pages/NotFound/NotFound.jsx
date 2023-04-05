import React from 'react'
import styles from './styles.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>ERROR 404 - Page Not Found</h1>
    <p className={styles.message}>The page you are looking for does not exist.</p>
  </div>
  )
}

export default NotFound
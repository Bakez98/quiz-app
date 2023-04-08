import React from 'react'
import styles from './styles.modules.css'
import { ScaleLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className={styles.container}>
      <ScaleLoader 
      color="rgba(255, 255, 255, 1)"
      height={30}
      width={30} />
    </div>
  )
}

export default Spinner

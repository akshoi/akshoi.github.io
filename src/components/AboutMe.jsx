import React from 'react'
import styles from '../style';

function AboutMe() {
  return (
    <div className={`flex-1 flex-col items-start justify-between gap-[20px] xl:px-0 sm:px-16 px-6`}>
        <h2 className={`${styles.heading2} w-full`}>
            About me
        </h2>
        <p className={`${styles.paragraph}`}>I'm a passionate developer and designer who loves to use IT to add value to bussinesses and to make people's life easier.</p>
        <p className={`${styles.paragraph}`}>I enjoy the challenge to find the best solution for the needs of an individual bussines which is always unique.</p>
    </div>

  )
}

export default AboutMe

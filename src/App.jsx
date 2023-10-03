import React from 'react'
import styles from './style'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

import { Button, Hero } from './components'

const App = () => (

  <div className={`w-full overflow-hidden m-auto`} >

    {/* Hero Block */}
    <div className={`bg-background  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} pb-[40px] md:pb-0`}>
        <Hero />
      </div>
    </div>

    {/* How can I help you? */}
    <div className={`bg-tertiary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className={`flex md:flex-row flex-col items-center gap-[20px] md:text-left min-h-screen text-center py-[40px] md:py-0`}>
            <AboutMe />
            <Skills />
        </div>
      </div>
    </div>

  </div>


)

export default App

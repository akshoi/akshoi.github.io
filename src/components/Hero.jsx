import React from 'react'
import Button from './Button';
import styles from '../style';
import akseli from '../assets/akseliSVG.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import mailIcon from '../assets/mail-icon.svg';
import githubIcon from '../assets/github-icon.svg';


const Hero = () => (
    <section className={`flex md:flex-row flex-col-reverse md:gap-0 gap-[20px] md:text-left md:pt-0 pt-[40px] text-center min-h-screen`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

            <div className="flex flex-col justify-between gap-[20px]">
                <h1 className={`${styles.heading1} w-full`}>
                    Hi, my <br />
                    name is <b className="text-primary">Akseli<span className="text-tertiary">.</span></b>
                </h1>
                <p className={`${styles.paragraph}`}>I'm a <b className="text-primary">developer</b> and <b className="text-primary">designer</b> from Finland,
                    looking for opportunities all across the globe.</p>
                <div className="flex flex-row gap-[20px] justify-center md:justify-start">
                    <div><a href="mailto:keinanenakseli@gmail.com" target="_blank"><img className="w-[70px] transform hover:scale-125 duration-150 ease-in-out" src={mailIcon} /></a></div>
                    <div><a href="https://www.linkedin.com/in/akselikeinanen/" target="_blank"><img className="w-[70px] transform hover:scale-125 duration-150 ease-in-out" src={linkedinIcon} /></a></div> 
                    <div><a href="https://github.com/akeinanen" target="_blank"><img className="w-[70px] transform hover:scale-125 duration-150 ease-in-out" src={githubIcon} /></a></div>
                </div>
            </div>

        </div>

        <div className={`${styles.flexStart} flex-1 flex-col items-center md:items-left xl:px-0 sm:px-16 px-6`}>
            <img src={akseli} alt="Akseli" className="w-[80%] h-[100%] relative" />
        </div>
    </section>
);

export default Hero

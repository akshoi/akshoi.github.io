import React from 'react'
import styles from '../style';
import Icon from './Icon';

import {
    html,
    css,
    tailwind,
    wordpress,
    javascript,
    react,
    java,
    php
} from "../assets"

function Skills() {
    return (
        <div className={`flex flex-1 flex-col gap-[20px] items-start xl:px-0 sm:px-16 px-6`}>
            <h2 className={`${styles.heading2} w-full`}>
                Essential skills
            </h2>
            <div className="grid grid-cols-4 gap-[20px] md:mx-0 mx-auto">
                <Icon image={html} hoverText="HTML" />
                <Icon image={css} hoverText="CSS" />
                <Icon image={tailwind} hoverText="Tailwind" />
                <Icon image={wordpress} hoverText="WordPress" />
                <Icon image={javascript} hoverText="JavaScript" />
                <Icon image={react} hoverText="React" />
                <Icon image={java} hoverText="Java" />
                <Icon image={php} hoverText="PHP" />
            </div>
        </div>
    )
}

export default Skills

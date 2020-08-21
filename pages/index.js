import React from 'react';
import Helmet from "react-helmet";
import classNames from 'classnames';

import styles from '../styles.module.css';

const Index = () => {
  return (
    <div className={styles.container}>
      <Helmet
        title="Miles Spoor | I am Like Minded"
        link={[
            {
              rel: 'stylesheet',
              href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css'
            },
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Merriweather:400,900'
            },
        ]}
      />

      <div className={styles.grid}>

        <h1 className={styles.h1}>Like<br /> Minded.</h1>

        <hr className={styles.break} />

        <p className={styles.paragraph}>I'm Miles, a web product engineer based in London. I have over ten years experience as a software engineer and enjoy working and learning with small teams of talented people on projects with the freedom to own process and deliver.</p>

        <p className={styles.paragraph}>I specialize in all things React, both websites and native mobile applications. I have experience writing and supporting high traffic applications in fast moving environments.</p>

        <h2 className={styles.h2}>Experience</h2>

        <p className={styles.paragraph}>I'm currently working at a startup called <a href="https://stasher.com">Stasher</a> enabling you to let go of your luggage and explore. Before that I made healthcare more affordable at <a href="https://babylonhealth.com/">Babylon Health</a>, built a better banking tools at <a href="https://monzo.com">Monzo</a> and got food to hungry people at <a href="https://deliveroo.co.uk">Deliveroo</a>.</p>

        <h2 className={styles.h2}>Tools</h2>

        <p className={styles.paragraph}>React, React Native, Redux, Express, Socketio, Nightwatch/Selenium, Git, Circle, Appium.</p>

        <h2 className={styles.h2}>Interests</h2>

        <p className={styles.paragraph}>Mobile applications, product experiments, procedural generation, electical engineering, cryptography, Let's Encrypt!, The Culture, Internet privacy and cryptocurrencies.</p>

        <h2 className={styles.h2}>Contact</h2>

        <p className={styles.paragraph}>
          <a className={classNames(styles.link, styles['contact-link'])} href="https://github.com/lededje" target="_blank">hub/lededje</a>
          <a className={classNames(styles.link, styles['contact-link'])} href="https://uk.linkedin.com/in/lededje" target="_blank">in/lededje</a>
          <a className={classNames(styles.link, styles['contact-link'])} href="https://keybase.io/lededje" target="_blank">keybase/lededje</a>
          <a className={classNames(styles.link, styles['contact-link'])} href="mailto:hello@likeminded.io">hello@likeminded.io</a>
        </p>
      </div>
    </div>
  )
}

export default Index;
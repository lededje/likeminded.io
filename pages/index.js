import React from 'react';
import css from 'next/css'

const style = {
  global: css({
    font: '400 14px/23px "Merriweather"',
  }),

  container: css({
    margin: '0 auto',
    padding: '150px 30px',
    textAlign: 'left',
    width: '550px',
  }),

  grid: css({
    webkitColumnCount: 2,
    webkitColumnGap: '30px',
    mozColumnCount: 2,
    mozColumnGap: '30px',
    columnCount: 2,
    columnGap: '30px',
    '@media only screen and (max-width: 667px)': {
      '.container': {
        width: 'auto',
        padding: '30px',
      },
      '.grid': {
        webkitColumnCount: 1,
        webkitColumnGap: 0,
        mozColumnCount: 1,
        mozColumnGap: 0,
        columnCount: 1,
        columnGap: 0,
      },
    },
  }),
  link: css({
    color: '#333',
  }),
  h1: css({
    color: '#222',
    font: '900 42px/44px "Merriweather"',
    letterSpacing: '-1px',
    margin: '20px 0 0 0',
  }),
  h2: css({
    color: '#333',
    font: '900 14px/22px "Merriweather"',
    marginBottom: 0,
  }),
  paragraph: css({
    marginTop: '0.2em',
    color: '#333',
  }),
  contactLink: css({
    display: 'block',
  }),
  break: css({
    background: '#333',
    border: 0,
    height: '3px',
    margin: '19px 0 25px 0',
    width: '100px',
  }),

};

export default function index() {
  return (
    <div {...style.global} {...style.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css" />
      <link href='https://fonts.googleapis.com/css?family=Merriweather:400,700,300italic,300,400italic,700italic,900,900italic' rel='stylesheet' type='text/css' />
      <link href='https://fonts.googleapis.com/css?family=Lato:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css' />

      <div {...style.grid}>

        <h1 {...style.h1}>Like<br /> Minded.</h1>

        <hr {...style.break} />

        <p {...style.paragraph}>I'm Miles, an engineer at Deliveroo in London. I have seven years experience as a software engineer and enjoy working and learning with small teams of talented people on projects with freedom to own process and deliver.</p>

        <h2 {...style.h2}>Experience</h2>

        <p {...style.paragraph}>I'm at Deliveroo, getting food to hungry people. Before I was at Osper educating children in finance with useful banking tools and before that I was at a web agency called Wickedweb and worked on a veritable cornucopia of projects for high profile clients.</p>

        <h2 {...style.h2}>Tools</h2>

        <p {...style.paragraph}>React, React Native, Redux, Marionette and Backbone, Cordova/Phonegap, Nodejs/iojs, ExpressJS, Socketio, Nightwatch/Selenium, Git, Jenkins, Karma, Chai, Mocha, Less &amp; SCSS, Appium, Grunt/Gulp.</p>

        <h2 {...style.h2}>Interests</h2>

        <p {...style.paragraph}>Mobile applications, experiments, procedural generation, cryptography, Let's Encrypt!, The Culture, Internet privacy and of course Bitcoins.</p>

        <h2 {...style.h2}>Contact</h2>

        <p {...style.paragraph}>
          <a {...style.link} {...style.contactLink} href="https://github.com/lededje" target="_blank">hub/lededje</a>
          <a {...style.link} {...style.contactLink} href="https://uk.linkedin.com/in/lededje" target="_blank">in/lededje</a>
          <a {...style.link} {...style.contactLink} href="https://keybase.io/lededje" target="_blank">keybase/lededje</a>
          <a {...style.link} {...style.contactLink} href="mailto:hello@likeminded.io">hello@likeminded.io</a>
        </p>
      </div>
    </div>
  )
}

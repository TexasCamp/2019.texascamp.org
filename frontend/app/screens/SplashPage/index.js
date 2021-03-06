// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Logo from 'Logo';
import BackgroundImage from 'BackgroundImage';
import { favicon } from 'files';
import download from 'images/download.png';
import appleTouchIcon from 'favicons/apple-touch-icon.png';
import favicon32x32 from 'favicons/favicon-32x32.png';
import favicon16x16 from 'favicons/favicon-16x16.png';
import safariPinnedTab from 'favicons/safari-pinned-tab.svg';
import NewsletterForm from './components/NewsletterForm';
import styles from './styles.css';

const Home = (): React.Element<any> =>
  (<div className={styles.main}>
    <Helmet>
      <title>Texas Camp 2019</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ef5a47" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#ef5a47" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div className={styles.wrapper}>
      <BackgroundImage />
      <Header />
      <Logo />
      <NewsletterForm />
      <div className={styles.prospectus}>
        <a href="https://drive.google.com/file/d/1OOjPe_s9dpKRE9MYtiXIDKz_Sq8p2wAQ/view">
          <img src={download} alt="Download the Sponsor Prospectus" />
          Sponsor Prospectus
          <div className={styles.border} />
        </a>
      </div>
    </div>
  </div>);

export default Home;

// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import styles from './styles.css';

type BasicPageProps = {
  title: string,
  body: object,
};

const BasicPage = ({ title, body }: BasicPageProps): React.Element<any> => {
  // Format body to:
  // - Update inline image src to include full url
  // - Remove all links
  let formattedBody = body.value;
  formattedBody = formattedBody
    ? formattedBody.replace(
        'src="/sites/default/files/inline-images/',
        'src="https://backend2019.texascamp.org/sites/default/files/inline-images/',
      )
    : '';
  let backgroundImage;
  switch (title) {
    case 'About Us':
      backgroundImage = 'camper';
      break;
    case 'Code of Conduct':
      backgroundImage = 'watertower';
      break;
    case 'Getting Around':
      backgroundImage = 'alamo';
      break;
    case 'Program':
      backgroundImage = 'camper';
      break;
    case 'Visiting San Antonio':
      backgroundImage = 'alamo';
      break;
    default:
      backgroundImage = 'snake';
      break;
  }
  return (
    <div>
      <Helmet title={title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header image={backgroundImage} />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <div className={styles.detail}>
            <div className={styles.mainContent}>
              {cleanHtml(formattedBody)}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BasicPage;

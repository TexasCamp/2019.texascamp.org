// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const NotFound = (): React.Element<any> =>
  (<div className={styles.Wrapper}>
    <Helmet title="Page not found" />
    <div>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back to the front page</Link>
      </p>
    </div>
  </div>);

export default NotFound;

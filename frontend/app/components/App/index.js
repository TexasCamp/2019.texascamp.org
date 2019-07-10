// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Home from 'Home';
import Typekit from 'react-typekit';
import styles from './styles.css';

const App = (): React.Element<any> =>
  (<div className={styles.wrapper}>
    <Helmet
      titleTemplate="Texas Camp 2019 - %s"
      defaultTitle="Texas Camp 2019"
    />
    <Typekit kitId="yde7xbz" />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>);

export default App;

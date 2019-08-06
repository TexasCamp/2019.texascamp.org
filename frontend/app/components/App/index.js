// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Home from 'Home';
import NotFound from 'NotFound';
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
      <Route
        path={['/sponsor', '/sponsors']}
        render={() => {
          if (global.window) {
            global.window.location.replace(
              'https://opencollective.com/drupalatx/events/texas-camp-2019-19178ev#tickets',
            );
          }

          return (
            <div>
              Redirecting to{' '}
              <a href="https://opencollective.com/drupalatx/events/texas-camp-2019-19178ev#tickets">
                https://opencollective.com/drupalatx/events/texas-camp-2019-19178ev#tickets
              </a>
            </div>
          );
        }}
      />
      <Route component={NotFound} />
    </Switch>
  </div>);

export default App;

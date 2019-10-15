// @flow

import 'App/normalize.css';

import React from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
import Home from 'Home';
import Sessions from 'Sessions';
import ProposedSessions from 'Sessions/Proposed';
import Session from 'Session';
import Happening from 'Happening';
import Sponsors from 'Sponsors';
import News from 'News';
import Humans from '!file-loader?name=humans.txt!./humans.txt';
import NewsOverview from 'NewsOverview';
import SubmitSession from 'SubmitSession';
import UpdateSession from 'UpdateSession';
import SplatRouter from 'SplatRouter';
import Typekit from 'react-typekit';
import favicon from '!file-loader?name=favicon.ico!favicons/favicon.ico';
import appleTouchIcon from 'favicons/apple-touch-icon.png';
import favicon32x32 from 'favicons/favicon-32x32.png';
import favicon16x16 from 'favicons/favicon-16x16.png';
import safariPinnedTab from 'favicons/safari-pinned-tab.svg';
import logo from 'images/texas-camp-logo-blue.png';
import styles from './styles.css';
import '../../shared/css/global.css';

class Scroll extends React.Component {
  componentDidMount = () => this.handleScroll();

  componentDidUpdate = () => this.handleScroll();

  handleScroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return this.props.children;
  }
}

const App = (): React.Element<any> =>
  (<div>
    <Helmet
      titleTemplate="Texas Camp 2019 - %s"
      defaultTitle="Texas Camp 2019"
    />
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ef5a47" />
      <meta name="description" content="The best Drupal Camp in Texas" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@DrupalTexasCamp" />
      <meta name="twitter:title" content="Texas Camp" />
      <meta
        name="twitter:description"
        content="The best Drupal Camp in Texas"
      />
      <meta name="twitter:image" content={`https://www.texascamp.org${logo}`} />
      <meta property="og:title" content="Texas Camp" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="www.texascamp.org" />
      <meta property="og:description" content="The best Drupal Camp in Texas" />
      <meta property="og:image" content={`https://www.texascamp.org${logo}`} />
      <meta property="og:url" content="https://www.texascamp.org" />
      <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="mask-icon" href={safariPinnedTab} color="#ef5a47" />
      <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <Typekit kitId="rgi7wxl" />
    <div className={styles.wrapper}>
      <Scroll>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/schedule" component={Sessions} />
          <Route exact path="/sessions/proposed" component={ProposedSessions} />
          <Route exact path="/sessions/:sessionName/" component={Session} />
          <Route exact path="/session-form" component={SubmitSession} />
          <Route
            exact
            path="/session-update/:id/:editToken"
            component={UpdateSession}
          />
          <Route
            exact
            path="/happenings/:happeningName/"
            component={Happening}
          />
          <Route exact path={Humans} />
          <Route exact path="/news" component={NewsOverview} />
          <Route exact path="/news/:newsTitle/" component={News} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route path="*" component={SplatRouter} />
        </Switch>
      </Scroll>
    </div>
  </div>);

export default App;

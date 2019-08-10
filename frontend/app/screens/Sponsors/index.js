// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import Sponsor from 'Sponsor';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import styles from 'Sponsors/styles.css';
import type { SponsorT, SponsorLevelT } from 'types';
import uniq from 'ramda/src/uniq';
import pick from 'ramda/src/pick';

type SponsorsPropsT = {
  loading: boolean,
  sponsors: SponsorT[],
};
const Sponsors = ({
  loading,
  sponsors,
}: SponsorsPropsT): React.Element<any> | false => {
  const individualSponsors = sponsors.filter(
    ({ sponsorLevel }) => sponsorLevel === 'Individual',
  );
  const companySponsors: SponsorT[] = sponsors.filter(
    ({ sponsorLevel }) => sponsorLevel !== 'Individual',
  );
  const filterByCompanySponsor = (level: SponsorLevelT): SponsorT[] =>
    companySponsors.filter(({ sponsorLevel }) => sponsorLevel === level);

  // get list of sorted sponsor levels, with 'individual' omitted
  const levels: SponsorLevelT[] = uniq(
    companySponsors.map(sponsor =>
      pick(['sponsorLevel', 'sponsorWeight'], sponsor),
    ),
  ).sort((a, b) => a.sponsorWeight - b.sponsorWeight);
  return (
    !loading &&
    <div>
      <Helmet title="Sponsors" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header image="sponsors" />
        <div className={styles.content}>
          <h1 className={styles.title}>Brought to you by</h1>
          <div className={styles.detail}>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Sponsor</div>
                <ol>
                  <li>
                    <p>View our sponsor prospectus</p>
                    <a
                      href="https://drive.google.com/file/d/1OOjPe_s9dpKRE9MYtiXIDKz_Sq8p2wAQ/view"
                      className={styles.button}
                    >
                      Download
                    </a>
                  </li>
                  <li>
                    <p>Let us know you&apos;ll be sponsoring this year</p>
                    <a
                      href="mailto:hello@texascamp.org"
                      className={styles.button}
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <p>
                      Join our{' '}
                      <a href="https://opencollective.com/drupalatx">
                        Open Collective
                      </a>{' '}
                      to submit funds
                    </p>
                    <a
                      href="https://opencollective.com/drupalatx/events/texas-camp-2019-19178ev#tickets"
                      className={styles.button}
                    >
                      Pay
                    </a>
                  </li>
                </ol>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Questions?</div>
                <p>Let us help you find the right fit.</p>
                <a href="mailto:hello@texascamp.org" className={styles.button}>
                  Contact us
                </a>
              </div>
            </div>
            <div className={styles.mainContent}>
              <p className={styles.introText}>
                Thank you to our generous sponsors for helping make this event a
                reality. We couldn&apos;t do it without you!
              </p>
              <p className={styles.introText}>
                Now is your chance to support your local Drupal community,
                recruit from a diverse Drupal talent pool, and showcase your
                brand to the Texas Drupal community.
              </p>
              <div className={styles.sponsorContainer}>
                {levels.map(({ sponsorLevel }) =>
                  (<div key={sponsorLevel}>
                    <h2>
                      {sponsorLevel} sponsors
                    </h2>
                    <div className={styles.sponsors}>
                      {filterByCompanySponsor(sponsorLevel).map(sponsor =>
                        <Sponsor key={sponsor.id} sponsor={sponsor} />,
                      )}
                    </div>
                  </div>),
                )}
                {individualSponsors.length > 0 &&
                  <div className={styles.individualSponsors}>
                    <h2>
                      {'Individual sponsors'}
                    </h2>
                    <ul>
                      {individualSponsors.map(({ id, title, sponsorUrl }) => {
                        return sponsorUrl
                          ? <li key={id}>
                            <a href={sponsorUrl}>
                              {title}
                            </a>
                          </li>
                          : <li key={id}>
                            {title}
                          </li>;
                      })}
                    </ul>
                  </div>}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default withSponsorsQuery(Sponsors);

// @flow
import React from 'react';
import { cleanHtml } from 'utils';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import type { SessionT } from 'types';
import styles from './styles.css';

type SessionIndividualProps = {
  session: SessionT,
};
const SessionIndividual = ({
  session: {
    body,
    skillLevel,
    timeslot,
    title,
    track,
    speakers,
    room,
    speakersBio,
  },
}: SessionIndividualProps) => {
  // Format date/time
  const formattedTimeslotDay = timeslot
    ? new Date(timeslot.value).toLocaleString('en-US', { weekday: 'long' })
    : '';
  const formattedTimeslotDate = timeslot
    ? new Date(timeslot.value).toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    })
    : '';

  return (
    <div>
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <div className={styles.detail}>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>
                  Presenter<span>(s)</span>
                </div>
                <div>
                  {speakers.map(eachName =>
                    (<div key={eachName}>
                      {eachName}
                    </div>),
                  )}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Track</div>
                <div>
                  {track}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Skill Level</div>
                <div>
                  {skillLevel}
                </div>
              </div>
              {timeslot &&
                <div className={styles.field}>
                  <div className={styles.fieldLabel}>Timeslot</div>
                  <div>
                    {formattedTimeslotDay}
                  </div>
                  <div>
                    {formattedTimeslotDate}
                  </div>
                </div>}
              {room &&
                <div className={styles.field}>
                  <div className={styles.fieldLabel}>Room</div>
                  <div>
                    {room}
                  </div>
                </div>}
            </div>
            <div className={styles.mainContent}>
              {cleanHtml(body)}

              {speakersBio &&
                <div className={styles.bio}>
                  <div className={styles.bioNames}>
                    {speakers.map(eachName =>
                      (<div key={eachName} className={styles.bioName}>
                        {eachName}
                      </div>),
                    )}
                  </div>
                  {cleanHtml(speakersBio)}
                </div>}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default SessionIndividual;

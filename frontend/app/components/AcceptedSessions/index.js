// @flow
import React from 'react';
import Link from 'AsyncLink';
import styles from './styles.css';
import withLogic from './logic';

const AcceptedSessions = ({
  sessions,
  setDateFilter,
  defaultDate,
}: AcceptedSessionsProps) => {
  return (
    <div className={styles.sessionsContainer}>
      <div className={styles.detail}>
        <h1 className={styles.title}>Schedule</h1>
        <div className={styles.filters}>
          <div className={styles.dayFilters}>
            <button
              onClick={() => setDateFilter(new Date('05/31/2018'))}
              className={`${styles.button} ${defaultDate.toDateString() ===
              new Date('05/31/2018').toDateString()
                ? styles.selected
                : ''}`}
            >
              Thursday
            </button>
            <button
              onClick={() => setDateFilter(new Date('06/01/2018'))}
              className={`${styles.button} ${defaultDate.toDateString() ===
              new Date('06/01/2018').toDateString()
                ? styles.selected
                : ''}`}
            >
              Friday
            </button>
            <button
              onClick={() => setDateFilter(new Date('06/02/2018'))}
              className={`${styles.button} ${defaultDate.toDateString() ===
              new Date('06/02/2018').toDateString()
                ? styles.selected
                : ''}`}
            >
              Saturday
            </button>
          </div>
          <div className={styles.skillLevelKey}>
            <div className={styles.skillLevel}>
              <div className={styles.beginner}>Beginner</div>
              <div className={styles.intermediate}>Intermediate</div>
              <div className={styles.advanced}>Advanced</div>
            </div>
          </div>
        </div>
        {sessions.map(sessionTimeslotGroup => {
          return (
            <div key={sessionTimeslotGroup[0]}>
              <h2 className={styles.timeslot}>
                {sessionTimeslotGroup[0]}
              </h2>
              <div className={styles.timeslotSessions}>
                {sessionTimeslotGroup[1].map(session => {
                  return (
                    <div key={session.urlString} className={styles.session}>
                      <Link
                        to={`/sessions/${session.urlString}`}
                        className={styles.sessionWrapper}
                      >
                        <div className={styles.sessionDetails}>
                          {session.skillLevel &&
                            session.track !== 'Keynote' &&
                            <div className={styles.skillLevel}>
                              <div className={session.skillLevel}>
                                {session.skillLevel}
                              </div>
                            </div>}
                          <h3 className={styles.sessionTitle}>
                            {session.title}
                          </h3>
                          {session.speakers &&
                            <div className={styles.speakers}>
                              {session.speakers.map(eachSpeaker =>
                                (<span key={eachSpeaker.fieldSessionPresenter}>
                                  {eachSpeaker.fieldSessionPresenter}
                                </span>),
                              )}
                              {session.track &&
                                session.track !== 'Keynote' &&
                                <span>
                                  {' '}| {session.track}
                                </span>}
                            </div>}
                        </div>
                        {session.room &&
                          <div className={styles.room}>
                            {session.room}
                          </div>}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withLogic(AcceptedSessions);

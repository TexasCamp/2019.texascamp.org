// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
              onClick={() => setDateFilter(moment.utc('2019-10-18'))}
              className={`${styles.button} ${moment
                .utc(defaultDate)
                .isSame(moment.utc('2019-10-18'), 'day')
                ? styles.selected
                : ''}`}
            >
              Friday
            </button>
            <button
              onClick={() => setDateFilter(moment.utc('2019-10-19'))}
              className={`${styles.button} ${moment
                .utc(defaultDate)
                .isSame(moment.utc('2019-10-19'), 'day')
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
                      <div className={styles.sessionWrapper}>
                        {session.body !== null
                          ? <Link
                            to={`${session.type === 'happening'
                                ? '/happenings/'
                                : '/sessions/'}${session.urlString}`}
                          >
                            <SessionDetails session={session} />
                          </Link>
                          : <SessionDetails session={session} />}
                        {session.room &&
                          <Link to="/venue">
                            <div className={styles.room}>
                              {session.room}
                            </div>
                          </Link>}
                      </div>
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

const SessionDetails = ({ session }: { session: SessionT }) => {
  return (
    <div className={styles.sessionDetails}>
      {session.skillLevel &&
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
            (<span
              key={eachSpeaker.fieldSessionPresenter}
              className={styles.presenter}
            >
              {eachSpeaker.fieldSessionPresenter}
            </span>),
          )}
          {session.track &&
            session.track !== 'Keynote' &&
            <span>
              <span className={styles.spacer}>|</span> {session.track}
            </span>}
        </div>}
    </div>
  );
};

export default withLogic(AcceptedSessions);

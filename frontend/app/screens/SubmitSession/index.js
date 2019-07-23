// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'AsyncLink';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
// import SessionForm from 'SubmitSession/form';
import withTermData from 'SubmitSession/withTermData';
import withSessionMutation from 'SubmitSession/withSessionMutation';
import withLogic from 'SubmitSession/logic';
import compose from 'recompose/compose';
import styles from './styles.css';

// const SubmitSession = ({
//   tracks,
//   skillLevels,
//   formValues,
//   setFormValue,
//   speakerCount,
//   addSpeaker,
//   removeSpeaker,
//   saving,
//   error,
//   onSubmit,
//   submitted,
//   resetForm,
// }) => {

const SubmitSession = ({ submitted, resetForm }) => {
  return (
    <div>
      <Helmet title="Submit a Session" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>Submit a session</h1>
            {submitted &&
              <div>
                <p className={styles.confirmationText}>
                  Your session has been submitted! You&apos;ll receive an email
                  confirmation and edit permalink.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className={styles.button}
                >
                  Submit another session
                </button>
                <Link to="/sessions/proposed" className={styles.button}>
                  View submitted sessions
                </Link>
              </div>}
            {!submitted &&
              <div>
                <p className={styles.introText}>
                  Thanks for your interest in speaking at Texas Camp. Session
                  submissions for 2019 have closed. You can view the{' '}
                  <a href="/schedule">schedule</a> or{' '}
                  <a href="https://www.eventbrite.com/e/texas-camp-2018-tickets-42911508477">
                    buy your ticket
                  </a>{' '}
                  for the event.
                </p>
                {/* <SessionForm
                  tracks={tracks}
                  skillLevels={skillLevels}
                  formValues={formValues}
                  setFormValue={setFormValue}
                  speakerCount={speakerCount}
                  addSpeaker={addSpeaker}
                  removeSpeaker={removeSpeaker}
                  saving={saving}
                  error={error}
                  onSubmit={onSubmit}
                /> */}
              </div>}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default compose(withSessionMutation, withTermData, withLogic)(
  SubmitSession,
);

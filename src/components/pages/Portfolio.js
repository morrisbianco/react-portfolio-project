import React from 'react';
import background1 from '../../images/covidandcats.png'
import background2 from '../../images/progressivetracker.png'
import background3 from '../../images/buildachar.png'
import background4 from '../../images/workouttracker.png'
import background5 from '../../images/weatherapp.png'
import background6 from '../../images/resumeBuilder.png'

const styles = {
  covid: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background1})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0
  },
  budget: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background2})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0
  },
  char: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background3})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0
  },
  workout: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background4})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0
  },
  weather: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background5})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0
  },
  resumeBuilder: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background6})`,
    height: "300px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    top: 0
  },
  backgroundColor: {
    backgroundColor: 'whitesmoke',
  }
};

export default function Portfolio() {
  return (
    <>
      <div class="columns py-5 px-5 is-variable is-multiline" style={styles.backgroundColor}>
        <div className="column is-4">
          <div className="card">
            <div className="has-text-centered title pt-4">
            <a href="https://jdogcrane.github.io/covid-and-cats/" target="_blank">Covid and Cat</a>
              </div>
            <div className="media-content" style={styles.covid}></div>
              <div className="subtitle has-text-centered"><a href="https://github.com/morrisbianco/covid-and-cats" target="_blank">GitHub</a></div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
          <div className="has-text-centered title pt-4">
            <a href="https://rapid-resume.herokuapp.com/" target="_blank">Rapid Resume Builder</a>
            </div>
            <div className="media-content" style={styles.resumeBuilder}> </div>
            <div className="subtitle has-text-centered"><a href="https://github.com/morrisbianco/resume-builder" target="_blank">GitHub</a></div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
          <div className="has-text-centered title pt-4">
            <a href="https://radiant-ridge-95664.herokuapp.com/list" target="_blank">Build-A-Char</a>
            </div>
            <div className="media-content" style={styles.char}></div>
            <div className="subtitle has-text-centered"><a href="https://github.com/morrisbianco/build-a-char" target="_blank">GitHub</a></div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
          <div className="has-text-centered title pt-4">
            <a href="https://mysterious-island-19383.herokuapp.com/?id=60edfc0c298e240015e87acf" target="_blank">Workout Tracker</a>
          </div>
            <div className="media-content" style={styles.workout}> </div>
          <div className="subtitle has-text-centered"><a href="https://github.com/morrisbianco/workout-tracker-project" target="_blank">GitHub</a></div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
          <div className="has-text-centered title pt-4">
            <a href="https://morrisbianco.github.io/weather-app-project/" target="_blank">Weather App</a>
          </div>
            <div className="media-content" style={styles.weather}></div>
          <div className="subtitle has-text-centered"><a href="https://github.com/morrisbianco/weather-app-project" target="_blank">GitHub</a></div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
          <div className="has-text-centered title pt-4">
          <a href="https://intense-shelf-28143.herokuapp.com/" target="_blank">Progressive Tracker</a>
          </div>
            <div className="media-content" style={styles.budget}></div>
          <div className="subtitle has-text-centered"><a href="https://github.com/morrisbianco/progressive-budget-project" target="_blank">GitHub</a></div>
          </div>
        </div>
      </div>
    </>
  );
}

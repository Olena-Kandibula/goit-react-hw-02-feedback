import './App.css';
// import React from "react";
import React, { Component } from 'react';

import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/statistics/notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const dataEvent = event.target.name;

    this.setState(prevState => {
      return {
        [dataEvent]: prevState[dataEvent] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (acc, value) => acc + value,
      0,
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.ceil(positiveFeedbackPercentage);
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react';

import Section from './components/section';
import FeedbackOptions from './components/feedbackOptions';
import Statistics from './components/statistics';
import Notification from './components/statistics/notification';

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

  generateRandomColor() {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  }

  render() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

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
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              generateRandomColor={this.generateRandomColor}
            ></Statistics>
          </Section>
        )}
      </div>
    );
  }
}

export default App;

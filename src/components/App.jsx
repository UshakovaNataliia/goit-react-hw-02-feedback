import React from 'react';
import Statistics from './Statistics';
import FeedbackButtons from './FeedbackButtons';
import Section from './Section';

class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  changeStatistics = button => {
    this.setState(prevState => {
      return { [button]: prevState[button] + 1 };
    });
  };
  countTotalFeedback() {
    return Object.values(this.state).reduce((first, next) => first + next);
  }
  countPositiveFeedbackPercentage() {
      return ((+(this.state.good*100)/this.countTotalFeedback()).toFixed(0));
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
     <>
       <Section title="Please leave feedback">
         <FeedbackButtons
           options={this.state}
           onLeaveFeedback={this.changeStatistics}
         />
       </Section>  
       <Section title="Statistics">
         <Statistics
           good={good}
           neutral={neutral}
           bad={bad}
           total={this.countTotalFeedback()}
           positivePercentage={this.countPositiveFeedbackPercentage()}
         />
       </Section>
     </>
    )
  }
};

export default App;
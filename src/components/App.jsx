import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Section from './Section/Section';

class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  changeStatistics = button => {
    this.setState(prev => {
      return { [button]: prev[button] + 1 };
    });
  };
  countTotalFeedback() {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
      return (+((this.state.good*100)/this.countTotalFeedback()).toFixed(2));
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
           positivePercentage={
             this.countPositiveFeedbackPercentage() > 0
               ? this.countPositiveFeedbackPercentage()
               : 0
           }
         />
       </Section>
     </>
    )
  }
};

export default App;
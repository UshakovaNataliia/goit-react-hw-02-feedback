import React from "react";
import Statistics from "./Statistics";
import FeedbackButtons from "./FeedbackButtons";
import Section from "./Section";
import SelectLang from './SelectLang/SelectLang';

const App = () => {
  return (
    <>
      <Section title="Please leave feedback">
      <SelectLang />
        <FeedbackButtons />
      </Section>
      <Section title="Statistics">
        <Statistics />
      </Section>
    </>
  );
};

export default App;

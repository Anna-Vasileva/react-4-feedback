import { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Section from "./components/Section";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const grade = { good, neutral, bad };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good * 100) / total) : 0;
  };
  const addGrade = (nameGrade) => {
    switch (nameGrade) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;
      case "neutral":
        setNeutral((prevGood) => prevGood + 1);
        break;
      case "bad":
        setBad((prevGood) => prevGood + 1);
        break;
      default:
        return;
    }
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(grade)}
          onLeaveFeedback={addGrade}
        />
      </Section>
      <Section title="">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;

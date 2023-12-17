import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./Buttons/FeedbackOptions";
import { Section } from "./Section/Section";
import css from './Styles.module.css';

export class App  extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
        };

    updateState = (evt) => {
        const variable = evt.currentTarget.textContent.toLowerCase();
        this.setState((state) => ({[variable]: state[variable] + 1}))
    }; 

    countTotalFeedback = () => {
        return (
            this.state.good + this.state.neutral + this.state.bad
        )
    };

    countPositiveFeedbackPercentage = () => {
        return (
            Math.round((this.state.good/[this.countTotalFeedback()])*100)
        )
    };

render(){

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(); 
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state)

    return (
    <div className={css.allDiv}>
        <Section title="Please leave feedback">
            <FeedbackOptions 
            options={options} 
            onLeaveFeedback={this.updateState}
            />
        </Section>

        <Section title="Statistics">
            <Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={total} 
            positivePercentage={positivePercentage}
            />
        </Section>
        </div>
    )
}
};

import { Component } from "react";
import css from "../Styles.module.css";

export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
        };

    plusValue = (evt) => {
        const variable = evt.currentTarget.textContent.toLowerCase()
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

        return (
            <div className={css.allDiv}>
            <h2>Please leave feedback</h2>
            <div className={css.buttons}>
            <button type="button" onClick={this.plusValue}>Good</button>
            <button type="button" onClick={this.plusValue}>Neutral</button>
            <button type="button" onClick={this.plusValue}>Bad</button>
            </div>
            <h2>Statistics</h2>
            <div className={css.allP}>
            <p>Good:<span>{this.state.good}</span></p>
            <p>Neutral:<span>{this.state.neutral}</span></p>
            <p>Bad:<span>{this.state.bad}</span></p>
            <p>Total: <span>{this.countTotalFeedback()}</span></p>
            <p>Positive feedback: <span>{this.countPositiveFeedbackPercentage()}%</span></p>
            </div>
            </div>
        )
    }
};
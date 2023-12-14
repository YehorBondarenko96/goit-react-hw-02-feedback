import { Component } from "react";
import css from "../Styles.module.css";
import { FeedbackOptions } from "components/Buttons/FeedbackOptions";
import { Section } from "components/ItemStatistics/Section";
import { Notification } from "components/Notification/Notification";

export class Statistics extends Component {
    state = {
    feedback: this.props.feedback
    };

    componentDidUpdate(prevProps) {
        if (prevProps.feedback !== this.props.feedback) {
            this.setState({ feedback: this.props.feedback });
        }
    };

    updateFeedback = (evt) => {
        this.props.updateState(evt)
    };

    countTotalFeedback = () => {
        return (
            this.state.feedback.good + this.state.feedback.neutral + this.state.feedback.bad
        )
    };

    countPositiveFeedbackPercentage = () => {
        return (
            Math.round((this.state.feedback.good/[this.countTotalFeedback()])*100)
        )
    };

    render(){

        return (
            <div className={css.allDiv}>
            <h2>Please leave feedback</h2>
            <FeedbackOptions updateFeedback={this.updateFeedback}/>
            <h2>Statistics</h2>
            <div className={css.allP}>
            {this.countTotalFeedback() > 0 
                ? <>
                <Section title="Good" value={this.state.feedback.good}/>
                <Section title="Neutral" value={this.state.feedback.neutral}/>
                <Section title="Bad" value={this.state.feedback.bad}/>
                <Section title="Total" value={this.countTotalFeedback()}/>
                <Section title="Positive feedback" value={`${this.countPositiveFeedbackPercentage()}%`}/>
                </>
                : <Notification message="No feedback given"/>}
                </div>
            </div>
        )
    }
};
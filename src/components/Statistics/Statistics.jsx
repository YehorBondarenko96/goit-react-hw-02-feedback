import css from "../Styles.module.css";
import { Section } from "components/ItemStatistics/Section";
import { Notification } from "components/Notification/Notification";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={css.allP}>
        {total > 0 
            ? <>
            <Section title="Good" value={good}/>
            <Section title="Neutral" value={neutral}/>
            <Section title="Bad" value={bad}/>
            <Section title="Total" value={total}/>
            <Section title="Positive feedback" value={`${positivePercentage}%`}/>
            </>
            : <Notification message="No feedback given"/>}
            </div>
    )
}
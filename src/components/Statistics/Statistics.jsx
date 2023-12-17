import css from "../Styles.module.css";
import { SectionForStatistics } from "components/ItemStatistics/SectionForStatistics";
import { Notification } from "components/Notification/Notification";

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className={css.allP}>
        {total > 0 
            ? <>
            <SectionForStatistics title="Good" value={good}/>
            <SectionForStatistics title="Neutral" value={neutral}/>
            <SectionForStatistics title="Bad" value={bad}/>
            <SectionForStatistics title="Total" value={total}/>
            <SectionForStatistics title="Positive feedback" value={`${positivePercentage}%`}/>
            </>
            : <Notification message="No feedback given"/>}
            </div>
    )
}
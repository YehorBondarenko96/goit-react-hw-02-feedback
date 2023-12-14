import css from '../Styles.module.css';

export const FeedbackOptions = ({updateFeedback}) => {
    return(
        <div className={css.buttons}>
            <button type="button" onClick={updateFeedback}>Good</button>
            <button type="button" onClick={updateFeedback}>Neutral</button>
            <button type="button" onClick={updateFeedback}>Bad</button>
            </div>
    )
};
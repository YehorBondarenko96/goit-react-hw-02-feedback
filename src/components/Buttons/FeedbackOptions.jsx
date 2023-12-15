import css from '../Styles.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <div className={css.buttons}>
            {options.map(option => (
                <button key={option} type="button" onClick={onLeaveFeedback}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
            ))}
        </div>
    )
};
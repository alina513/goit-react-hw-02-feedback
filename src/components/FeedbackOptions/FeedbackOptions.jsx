import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.list}>
    {options.map((option, index) => (
      <button
        className={css.button}
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

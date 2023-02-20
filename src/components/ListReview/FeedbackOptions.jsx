import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => (
  <div className={styles.containerOptions}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        name={option}
        onClick={leaveFeedback}
        className={styles.button}
      >
        {option[0] + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  leaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;

import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ leaveFeedback }) => (
  <div className={styles.containerOptions}>
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        leaveFeedback('good');
      }}
    >
      Good
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        leaveFeedback('neutral');
      }}
    >
      Neutral
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={() => {
        leaveFeedback('bad');
      }}
    >
      Bad
    </button>
  </div>
);
FeedbackOptions.propTypes = {
  leaveFeedback: propTypes.func.isRequired,
};
export default FeedbackOptions;

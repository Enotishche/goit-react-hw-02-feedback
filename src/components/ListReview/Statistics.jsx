import styles from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, goodPercent }) => (
  <div>
    <p className={styles.text}>Good: {good}</p>
    <p className={styles.text}>Neutral: {neutral}</p>
    <p className={styles.text}>Bad: {bad}</p>
    <p className={styles.text}>Total: {total}</p>
    <p className={styles.text}>Positive feedback: {goodPercent} %</p>
  </div>
);
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  goodPercent: propTypes.number.isRequired,
};
export default Statistics;

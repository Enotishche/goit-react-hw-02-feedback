import styles from './Notification.module.css';
import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;

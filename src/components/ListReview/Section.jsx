import styles from './Section.module.css';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
export default Section;

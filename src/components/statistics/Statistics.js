import s from '../statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import TotalSmile from './TotalSmile';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.list}>
      <p className={s.item}>
        <span className={s.description}>Good:</span>
        <span>{good}</span>
        <span>&#9989;</span>
      </p>
      <p className={s.item}>
        <span className={s.description}>Neutral:</span>
        <span>{neutral}</span>
        <span>&#128528;</span>
      </p>
      <p className={s.item}>
        <span className={s.description}>Bad:</span>
        <span>{bad}</span>
        <span>&#9940;</span>
      </p>
      <p className={s.item}>
        <span className={s.description}>Total:</span>
        <span>{total}</span>
        <span>&#9749;</span>
      </p>

      <TotalSmile total={total} smile="&#9749;"></TotalSmile>

      <p className={s.item}>
        <span>Positive feedback:</span>
        <span>{positivePercentage} %</span>
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

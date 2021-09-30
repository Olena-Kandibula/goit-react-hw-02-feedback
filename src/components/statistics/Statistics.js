import s from '../statistics/Statistics.module.css';
import PropTypes from 'prop-types';

import { GiCoffeeCup } from 'react-icons/gi';
import { BiUpsideDown } from 'react-icons/bi';
import { BiSmile } from 'react-icons/bi';
import { BiMehBlank } from 'react-icons/bi';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  generateRandomColor,
}) => {
  const capsCoffee = Array.from({ length: total - 1 }).map((u, i) => i);

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <span className={s.description}>Good:</span>
        <span>{good}</span>
        <span>
          <BiSmile color="green" size="24px" />
        </span>
      </li>

      <li className={s.item}>
        <span className={s.description}>Neutral:</span>
        <span>{neutral}</span>
        <span>
          <BiMehBlank color="grey" size="24px" />
        </span>
      </li>

      <li className={s.item}>
        <span className={s.description}>Bad:</span>
        <span>{bad}</span>
        <span>
          <BiUpsideDown color="red" size="24px" />
        </span>
      </li>

      <li className={s.item}>
        <span className={s.description}>Total:</span>
        <span>{total}</span>
        <GiCoffeeCup color="green" size="24px" />
      </li>

      <li className={s.item}>
        {capsCoffee.map(cap => (
          <span className={s.capsContainer} key={cap}>
            <GiCoffeeCup
              color={generateRandomColor()}
              size="30px"
              margin-right="2px"
            />
          </span>
        ))}
      </li>

      <li className={s.item}>
        <span>Positive feedback:</span>
        <span>{positivePercentage} %</span>
      </li>
    </ul>
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

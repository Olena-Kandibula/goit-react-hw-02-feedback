import PropTypes from 'prop-types';

function TotalSmile({ total, smile }) {
  const items = Array.from({ length: total - 1 }).map((u, i) => i);

  return (
    <div>
      {items.map(item => (
        <span key={item}>{smile}</span>
      ))}
    </div>
  );
}

TotalSmile.propTypes = {
  total: PropTypes.number.isRequired,
  smile: PropTypes.string,
};

export default TotalSmile;

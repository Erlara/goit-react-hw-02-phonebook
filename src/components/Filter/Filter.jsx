import PropTypes from 'prop-types';

export const Filter = ({ value, toFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={value} onChange={toFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  toFilter: PropTypes.func.isRequired,
};

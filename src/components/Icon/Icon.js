import PropTypes from 'prop-types';
import sprite from 'assets/sprite.svg';

const Icon = ({ className, iconName, width, height, fill, stroke }) => {
  return (
    <svg
      className={`icon icon-${iconName} ${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

Icon.defaultProps = {
  className: '',
  iconName: '',
  width: '20px',
  height: '20px',
  fill: '#000000',
  stroke: 'inherit',
};

Icon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export default Icon;

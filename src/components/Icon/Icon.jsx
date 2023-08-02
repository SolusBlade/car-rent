import clsx from 'clsx';
import icon from '../../assets/icons/icons.svg';

const Icon = ({ name, width, height, secondaryClassName }) => (
  <svg
    width={width}
    height={height}
    className={clsx(
      secondaryClassName && secondaryClassName
    )}
  >
    <use xlinkHref={`${icon}#${name}`} />
  </svg>
);

export default Icon;

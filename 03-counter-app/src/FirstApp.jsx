import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

FirstApp.defaultProps = {
  title: 'No hay título',
  subtitle: 'No hay subtítulo',
};
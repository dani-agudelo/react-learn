import PropTypes from 'prop-types';

export const TestComponent = ({ message }) => {
  return <h1>{message}</h1>;
};

TestComponent.propTypes = {
  message: PropTypes.string,
};

TestComponent.defaultProps = {
  message: 'Mensaje por defecto',
};
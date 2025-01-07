import PropTypes from 'prop-types';

export const AppInromationLayout = ({ information }) => <div>{information}</div>;

AppInromationLayout.propTypes = {
	information: PropTypes.string,
};

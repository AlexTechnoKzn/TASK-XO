import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';
import { PLAYER } from '../../constants';

export const Field = ({ field, handleSymlClick }) => {
	return <FieldLayout field={field} handleSymlClick={handleSymlClick} />;
};

Field.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOTHING]),
	),
	handleSymlClick: PropTypes.func,
};

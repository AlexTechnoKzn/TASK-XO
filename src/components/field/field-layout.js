import PropTypes from 'prop-types';
import styles from './field.module.css';
import { PLAYER, PLAYER_ZNAK } from '../../constants';

export const FieldLayout = ({ field, handleSymlClick }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button
				key={index}
				className={styles.cell}
				onClick={() => handleSymlClick(index)}
			>
				{PLAYER_ZNAK[cellPlayer]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOTHING]),
	),
	handleSymlClick: PropTypes.func,
};

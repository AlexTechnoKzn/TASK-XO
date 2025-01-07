import PropTypes from 'prop-types';
import styles from './App.module.css';
import { STATUS, PLAYER } from './constants';
import { Field, AppInformation } from './components';

export const AppLayout = ({
	status,
	currentPlayer,
	field,
	handleSymlClick,
	handleRestart,
}) => (
	<div className={styles.app}>
		<AppInformation status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleSymlClick={handleSymlClick} />
		<button className={styles.newGameButton} onClick={handleRestart}>
			NEW GAME
		</button>
	</div>
);

AppLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOTHING]),
	field: PropTypes.arrayOf(
		PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOTHING]),
	),
	handleSymlClick: PropTypes.func,
	handleRestart: PropTypes.func,
};

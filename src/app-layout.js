import styles from './App.module.css';
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

import PropTypes from 'prop-types';
import { useState } from 'react';
import { AppLayout } from './app-layout';
import { STATUS, PLAYER } from './constants';
import { checkWin } from './helpers';

export const App = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(new Array(9).fill(PLAYER.NOTHING));

	const handleSymlClick = (cellIndex) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOTHING
		) {
			return;
		}

		const newField = [...field];

		newField[cellIndex] = currentPlayer;

		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setStatus(STATUS.WIN);
		} else if (newField.some((cellPlayer) => cellPlayer === PLAYER.NOTHING)) {
			setCurrentPlayer(
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
			);
		} else {
			setStatus(STATUS.DRAW);
		}
	};

	const handleRestart = () => {
		setStatus(STATUS.TURN);
		setCurrentPlayer(PLAYER.CROSS);
		setField(new Array(9).fill(PLAYER.NOTHING));
	};

	return (
		<AppLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleSymlClick={handleSymlClick}
			handleRestart={handleRestart}
		/>
	);
};

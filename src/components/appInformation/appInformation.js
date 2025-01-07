import PropTypes from 'prop-types';
import { PLAYER_NAME, ACTION_INFO, STATUS, PLAYER } from '../../constants';
import { AppInromationLayout } from './appInformation-layout';

export const AppInformation = ({ status, currentPlayer }) => {
	const actionInfo = ACTION_INFO[status];
	const playerNameInfo = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${actionInfo}: ${playerNameInfo}`;

	return <AppInromationLayout information={information} />;
};

AppInformation.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOTHING]),
};

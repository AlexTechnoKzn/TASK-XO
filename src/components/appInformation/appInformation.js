import { PLAYER_NAME, ACTION_INFO, STATUS } from '../../constants';
import { AppInromationLayout } from './appInformation-layout';

export const AppInformation = ({ status, currentPlayer }) => {
	const actionInfo = ACTION_INFO[status];
	const playerNameInfo = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${actionInfo}: ${playerNameInfo}`;

	return <AppInromationLayout information={information} />;
};

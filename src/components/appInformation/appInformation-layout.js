import styles from './appInformation.module.css';

export const AppInromationLayout = ({ information }) => (
	<div className={styles.appInformation}>{information}</div>
);

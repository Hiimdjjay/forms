import { CircleCheckBig } from 'lucide-react';
import styles from './Submitted.module.css';

type SubmittedProps = {
	reset: () => void;
};

export function Submitted({ reset }: SubmittedProps) {
	return (
		<div className={styles.submitted}>
			<div className={styles.background}>
				<CircleCheckBig size={60} strokeWidth={1.5} color='rgb(49, 188, 41)' />
			</div>
			<h2>Formularz został wysłany</h2>
			<button onClick={() => reset()} className={styles.navLink}>
				Wyslij nowy formularz
			</button>
		</div>
	);
}

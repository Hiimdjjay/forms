import { CircleCheckBig } from 'lucide-react';
import styles from './Submitted.module.css';
import { Link } from 'react-router-dom';

export function Submitted() {
	return (
		<div className={styles.submitted}>
			<div className={styles.background}>
				<CircleCheckBig size={60} strokeWidth={1.5} color='rgb(49, 188, 41)' />
			</div>
			<h2>Formularz został wysłany</h2>
			<Link to={'/'} className={styles.navLink}>
				Wróć na stronę główna
			</Link>
		</div>
	);
}

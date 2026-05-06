import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navigationData = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Form Standard ', path: '/form-standard' },
	{ id: 3, name: 'Form React 19', path: '/form-react-19' },
	{ id: 4, name: 'React Hook Form', path: '/form-react-hook-form' }
];

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				{navigationData.map(({ id, name, path }) => {
					return (
						<NavLink key={id} to={path} className={styles.navElement}>
							{({ isActive }) => <p className={isActive ? styles.active : ''}>{name}</p>}
						</NavLink>
					);
				})}
			</nav>
		</header>
	);
}

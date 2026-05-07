import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navigationData = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'Form Standard ', path: '/form-standard' },
	{ id: 3, name: 'RHF', path: '/form-react-hook-form' },
	{ id: 4, name: 'RHF + Zod', path: '/form-react-hook-form-and-zod' }
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

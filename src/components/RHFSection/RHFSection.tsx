import { useState } from 'react';
import { FormRHF } from '../../pages/FormRHF/FormRHF';
import { UsersList } from '../UsersList/UsersList';
import styles from './RHFSection.module.css';

const usersList = [
	{ id: 1, username: 'MariaRafalska', email: 'mariarafalska@o2.pl', password: 'Marysia1999' },
	{ id: 2, username: 'Kamil Bojek', email: 'kamilbojek@gmail.pl', password: 'kamilek@#' }
];

type Inputs = {
	username: string;
	email: string;
	password: string;
};

export function RHFSection() {
	const [usersData, setUsersData] = useState(usersList);

	function addNewUser(newUserData: Inputs) {
		setUsersData(prev => [...prev, { id: prev.length + 1, ...newUserData }]);
		// throw new Error('Błąd backend');
	}

	return (
		<main className={styles.container}>
			<FormRHF addNewUser={addNewUser} />
			<UsersList usersData={usersData} />
		</main>
	);
}

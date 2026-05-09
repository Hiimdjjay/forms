import styles from './UsersList.module.css';

type User = { id: number; username: string; email: string; password: string };

type UsersListProps = {
	usersData: User[];
};

export function UsersList({ usersData }: UsersListProps) {
	return (
		<div className={styles.usersList}>
			<ul>
				{usersData.map(({ id, username, email, password }) => {
					return (
						<li key={id}>
							<span>ID użytkownikaa: {id.toString()}</span>
							<span>Użytkownik: {username}</span>
							<span>Adres email: {email}</span>
							<span>Hasło: {password}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

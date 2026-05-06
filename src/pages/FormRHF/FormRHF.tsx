import styles from '../Form.module.css';

export function FormRHF() {
	return (
		<main>
			<form className={styles.form} noValidate>
				<div className={styles.textBox}>
					<h1>Register</h1>
					<p>React Hook Form</p>
				</div>
			</form>
		</main>
	);
}

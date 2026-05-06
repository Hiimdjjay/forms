import styles from '../Form.module.css';

export function FormStandard() {


	return (
		<main>
			<form className={styles.form} noValidate>
				<div className={styles.textBox}>
					<h1>Register</h1>
					<p>Form standard</p>
				</div>

			</form>
		</main>
	);
}

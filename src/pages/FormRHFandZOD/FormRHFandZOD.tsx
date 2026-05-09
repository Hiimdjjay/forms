import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Input } from '../../components/Input/Input';
import styles from '../Form.module.css';

export function FormRHFandZOD() {
	return (
		<main>
			<form className={styles.form} noValidate>
				<div className={styles.textBox}>
					<h1>Register</h1>
					<p>Form RHF + ZOD</p>
				</div>
				<div className={styles.inputsBox}>
					<Input label='Name' id='username' placeholder='Username' />
					<Input label='Email adress' id='email' type='email' placeholder='Email adress' />
					<Input label='Password' id='telephone' type='password' placeholder='Password' />
					<Input label='Confirm Password' id='telephone' type='password' placeholder='Confirm password' />
					<Checkbox label='I accept the Privacy Policy and Terms & Condition.' />
				</div>
				<button className={styles.button} type='submit'>
					Submit
				</button>
			</form>
		</main>
	);
}

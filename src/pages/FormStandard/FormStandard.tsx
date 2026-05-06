import { useState } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Input } from '../../components/Input/Input';
import styles from '../Form.module.css';

export function FormStandard() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [terms, setTerms] = useState(false);
	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');
	const [checkboxError, setCheckboxError] = useState(false);

	function validateUsername() {
		if (username === '') {
			setUsernameError('Provide username');
			return false;
		}
		setUsernameError('');
		return true;
	}
	function validateEmail() {
		if (email === '') {
			setEmailError('Provide email');
			return false;
		}
		setEmailError('');
		return true;
	}
	function validatePassword() {
		if (password === '') {
			setPasswordError('Provide password');
			return false;
		}
		setPasswordError('');
		return true;
	}
	function validateConfirmPassword() {
		if (confirmPassword === '') {
			setConfirmPasswordError('Confirm password');
			return false;
		}
		setConfirmPasswordError('');
		return true;
	}

	function validateTerms() {
		if (!terms) {
			setCheckboxError(true);
			return false;
		}
		setCheckboxError(false);
		return true;
	}

	function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const isUsernameValid = validateUsername();
		const isEmailValid = validateEmail();
		const isPasswordValid = validatePassword();
		const isConfirmPasswordValid = validateConfirmPassword();
		const isTermsValid = validateTerms();

		if (!isUsernameValid || !isEmailValid || !isPasswordValid || !isConfirmPasswordValid || !isTermsValid) return;
		const data = { username, email, password, confirmPassword };
		console.log(data);
	}

	return (
		<main>
			<form onSubmit={handleFormSubmit} className={styles.form} noValidate>
				<div className={styles.textBox}>
					<h1>Register</h1>
					<p>Form standard</p>
				</div>
				<div className={styles.inputsBox}>
					<Input
						label='Username'
						id='username'
						placeholder='Username'
						value={username}
						setValue={setUsername}
						error={usernameError}
					/>
					<Input
						label='Email adress'
						id='email'
						type='email'
						placeholder='Email adress'
						value={email}
						setValue={setEmail}
						error={emailError}
					/>
					<Input
						label='Password'
						id='telephone'
						type='password'
						placeholder='Password'
						value={password}
						setValue={setPassword}
						error={passwordError}
					/>
					<Input
						label='Confirm Password'
						id='telephone'
						type='password'
						placeholder='Confirm password'
						value={confirmPassword}
						setValue={setConfirmPassword}
						error={confirmPasswordError}
					/>
					<Checkbox
						label='I accept the Privacy Policy and Terms & Condition.'
						value={terms}
						setValue={setTerms}
						error={checkboxError}
					/>
				</div>
				<button className={styles.button} type='submit'>
					Submit
				</button>
			</form>
		</main>
	);
}

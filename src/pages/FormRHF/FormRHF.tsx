import { CheckboxRHF } from '../../components/CheckboxRHF/CheckboxRHF';
import { InputRHF } from '../../components/InputRHF/InputRHF';
import { Submitted } from '../../components/Submitted/Submitted';
import styles from '../Form.module.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

type Inputs = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	terms: boolean;
};

type User = { username: string; email: string; password: string };

export function FormRHF({ addNewUser }: { addNewUser: (user: User) => void }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset,
		setError
	} = useForm<Inputs>({
		defaultValues: {
			username: 'jakubjakub',
			email: 'jakub@asdf.pl',
			password: 'Jakub1996',
			confirmPassword: 'Jakub1996'
		}
	});

	async function onSubmit(data: Inputs) {
		const { terms, confirmPassword, ...restData } = data;

		try {
			await emailjs.send('Test', 'template_dyssfjb', restData, 'BzmP2XQ1OmJhyeYom');
			addNewUser(restData);
		} catch {
			setError('root', { message: 'Formularz nie może zostać wysłany, spróbuj jescze raz', type: 'custom' });
		}
	}

	if (isSubmitSuccessful) return <Submitted reset={reset} />;

	return (
		<div>
			<form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.textBox}>
					<h1>Register</h1>
					<p>React Hook Form</p>
				</div>
				<div className={styles.inputsBox}>
					<InputRHF
						label='Username'
						id='username'
						placeholder='Username'
						register={register}
						required='You must introduce username'
						error={errors?.username?.message}
						minLength={6}
						maxLength={24}
					/>
					<InputRHF
						label='Email adress'
						id='email'
						type='email'
						placeholder='Email adress'
						register={register}
						required='You must introduce email'
						error={errors?.email?.message}
						pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
						patternMessage='Please provide a valid email addres'
					/>
					<InputRHF
						label='Password'
						id='password'
						type='password'
						placeholder='Password'
						register={register}
						required='You must introduce password'
						error={errors?.password?.message}
						pattern={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}
						patternMessage='Password must contain at least 8 cahracters, one uppercase letter, one lowercase letter and one number'
					/>
					<InputRHF
						label='Confirm Password'
						id='confirmPassword'
						type='password'
						placeholder='Confirm password'
						register={register}
						required='You must confirm password'
						error={errors?.confirmPassword?.message}
						validate={val => val === watch('password') || 'Passwords do not match'}
					/>
					<CheckboxRHF
						id='terms'
						label='I accept the Privacy Policy and Terms & Condition.'
						register={register}
						required='You must accept Privacy Policy and Terms of Condition'
						error={errors?.terms?.message}
					/>
				</div>
				<button className={styles.button} type='submit'>
					{isSubmitting ? 'Submitting...' : 'Submit'}
				</button>
				{errors?.root && <span>{errors.root.message}</span>}
			</form>
		</div>
	);
}

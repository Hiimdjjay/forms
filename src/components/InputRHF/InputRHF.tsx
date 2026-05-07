import type { UseFormRegister } from 'react-hook-form';
import styles from './InputRHF.module.css';

export function InputRHF({
	id,
	label,
	type = 'text',
	placeholder,
	register,
	required = false,
	error,
	minLength,
	maxLength,
	pattern,
	patternMessage,
	validate
}: {
	id: string;
	label: string;
	type?: string;
	placeholder: string;
	register: UseFormRegister<any>;
	required?: boolean | string;
	error?: string;
	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
	patternMessage?: string;
	validate?: (value: string) => boolean | string;
}) {
	return (
		<div className={styles.container}>
			<label htmlFor={id}>{label}</label>
			<input
				className={`${error ? styles.inputError : styles.inputNoError}`}
				id={id}
				type={type}
				placeholder={placeholder}
				{...register(id, {
					required: required,
					...(minLength && {
						minLength: { value: minLength, message: `${label} must be at least ${minLength} characters` }
					}),
					...(maxLength && {
						maxLength: { value: maxLength, message: `${label} must be at least ${maxLength} characters` }
					}),
					...(pattern && { pattern: { value: pattern, message: patternMessage ?? 'Invalid format' } }),
					...(validate && { validate: validate })
				})}
			/>
			{error && <span>{error}</span>}
		</div>
	);
}

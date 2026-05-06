import type { Dispatch, SetStateAction } from 'react';
import styles from './Input.module.css';

export function Input({
	id,
	label,
	type = 'text',
	placeholder,
	value,
	setValue,
	error
}: {
	id: string;
	label: string;
	type?: string;
	placeholder: string;
	value?: string;
	setValue?: Dispatch<SetStateAction<string>>;
	error?: string;
}) {
	return (
		<div className={styles.container}>
			<label htmlFor={id}>{label}</label>
			<input
				className={`${error ? styles.inputError : styles.inputNoError}`}
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => setValue?.(e.target.value)}
			/>
			{error && <span>{error}</span>}
		</div>
	);
}

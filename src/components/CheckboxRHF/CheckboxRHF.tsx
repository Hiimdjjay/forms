import type { UseFormRegister } from 'react-hook-form';
import styles from './CheckboxRHF.module.css';

export function CheckboxRHF({
	label,
	id,
	register,
	required,
	error
}: {
	label: string;
	id: string;
	register: UseFormRegister<any>;
	required: string;
	error?: string | boolean;
}) {
	return (
		<div className={styles.checkbox}>
			<label>
				<input id={id} type='checkbox' {...register(id, { required: required })} />
				{label}
			</label>
			{error && <span>{error}</span>}
		</div>
	);
}

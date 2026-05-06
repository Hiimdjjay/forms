import styles from './Input.module.css';

export function Input({
	id,
	label,
	type = 'text',
	placeholder
}: {
	id: string;
	label: string;
	type?: string;
	placeholder: string;
}) {
	return (
		<div className={styles.container}>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} placeholder={placeholder} />
			<span></span>
		</div>
	);
}

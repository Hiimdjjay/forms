import styles from './Checkbox.module.css';

export function Checkbox({ label }: { label: string }) {
	return (
		<div className={styles.checkbox}>
			<label >
				<input type='checkbox' />
				{label}
			</label>
		</div>
	);
}

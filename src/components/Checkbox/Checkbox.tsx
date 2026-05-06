import type { Dispatch, SetStateAction } from 'react';
import styles from './Checkbox.module.css';

export function Checkbox({
	label,
	value,
	setValue,
	error
}: {
	label: string;
	value?: boolean;
	setValue?: Dispatch<SetStateAction<boolean>>;
	error?: boolean;
}) {
	return (
		<div className={styles.checkbox}>
			<label>
				<input type='checkbox' checked={value} onChange={() => setValue?.(prev => !prev)} />
				{label}
			</label>
			{error && <span>You must accept the Privacy Policy and terms of condition</span>}
		</div>
	);
}

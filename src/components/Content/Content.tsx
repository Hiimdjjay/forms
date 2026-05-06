import styles from './Content.module.css';

export function Content() {
	return (
		<div className={styles.container}>
			<h1>Formularze React</h1>
			<div className={styles.background}>
				<p>
					Na tej stronie znajdziesz najczęściej spotykane rozwiązania formularzy w React — od prostej obsługi
					stanu i walidacji, przez integrację z popularnymi bibliotekami jak React Hook Form czy Formik, aż po
					zaawansowane wzorce stosowane w prawdziwych projektach. Praktyczne przykłady, gotowe do użycia.
				</p>
			</div>
		</div>
	);
}

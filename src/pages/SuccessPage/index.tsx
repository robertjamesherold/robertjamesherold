import { Container } from '../../layout/Container';
import { Link } from 'react-router-dom';
import styles from './_SuccessPage.module.scss';

export function SuccessPage() {
  return (
    <main>
      <Container span={{ default: 12 }}>
        <div className={styles.successContainer}>
          <div className="card textcenter aligncenter" style={{ maxWidth: '600px' }}>
            <div className="cardicon textcenter">
              <svg
                className={styles.successIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h1 className={styles.title}>Nachricht erfolgreich gesendet!</h1>

            <p className={styles.message}>
              Vielen Dank für deine Nachricht. Ich werde mich so schnell wie möglich bei dir melden.
            </p>

            <div className={styles.actions}>
              <Link to="/" className="buttonprimary">
                Zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
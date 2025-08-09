import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../../layout/Container';
import styles from './_ContactForm.module.scss';

import { TextInput } from './FormInput';
import { TextArea } from './FormArea';
import { ErrorPopup } from './FormErrorPopup';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowErrorPopup(false);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...Object.fromEntries(formData),
        }).toString(),
      });

      if (response.ok) {
        navigate('/danke');
      } else {
        const errorText = await response.text();
        setErrorMessage(`Server-Fehler (${response.status}): ${errorText || 'Unbekannter Fehler'}`);
        setShowErrorPopup(true);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(`Netzwerk-Fehler: ${error.message}`);
      } else {
        setErrorMessage('Unbekannter Fehler bei der Übertragung.');
      }
      setShowErrorPopup(true);
    }

    setIsSubmitting(false);
  };

  const handleCloseErrorPopup = (): void => {
    setShowErrorPopup(false);
    setErrorMessage('');
  };

  return (
    <section>
      {/* Netlify Hidden Form */}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="Vorname" />
        <input type="text" name="Nachname" />
        <input type="email" name="E-Mail" />
        <input type="text" name="Betreff" />
        <textarea name="Nachricht" />
        <button type="submit">Submit</button>
      </form>
      {/* Sichtbares Formular */}
      <form
        className="card grid-sm2"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <input name="bot-field" />
        </div>

        <Container span={{ default: 12 }}>
          <TextInput
            label="Vorname"
            inputName="Vorname"
            required
          />
        </Container>

        <Container span={{ default: 6 }}>
          <TextInput
            label="Nachname"
            inputName="Nachname"
            required
          />
        </Container>

        <Container span={{ default: 2 }}>
          <TextInput
            inputName="E-Mail"
            label="E-Mail"
            className={styles.colFull}
            required
          />
        </Container>

        <Container span={{ default: 2 }}>
          <TextInput
            inputName="Betreff"
            label="Betreff"
            className={styles.colFull}
            required
          />
        </Container>

        <Container span={{ default: 2 }}>
          <TextArea
            inputName="Nachricht"
            label="Nachricht"
            className={styles.colFull}
            required
          />
        </Container>

        <button
          type="submit"
          className={`buttonprimary ${styles.colFull}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wird gesendet...' : 'Senden'}
        </button>
      </form>

      <ErrorPopup
        isVisible={showErrorPopup}
        onClose={handleCloseErrorPopup}
        message={errorMessage}
        />
    </section>
  );
}

// Optional: Falls FormCard so einfach bleibt
export function FormCard() {
  return <ContactForm />;
}
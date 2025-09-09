import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './_ContactForm.module.scss';
import { Flexbox } from '../../../components/Flexbox';
import { TextInput } from './FormInput';
import { TextArea } from './FormArea';
import { ErrorPopup } from './FormErrorPopup';
import { Grid } from '../../../layout/GridLayout';



export function ContactForm() {
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
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...Object.fromEntries(formData)
        }).toString()
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseErrorPopup = (): void => {
    setShowErrorPopup(false);
    setErrorMessage('');
  };

  return (
    <Grid row={{default: 4}} span={{ lg: 7 }}>
      <form
        className="contactCard"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="form-name" value="contact" />
      <Flexbox flex="column" gap="medium">
      <div className="h2">Kontaktformular</div>
         <p>
            Bitte füllen Sie das Formular aus, um mich zu kontaktieren. Ich werde mich so schnell
            wie möglich bei Ihnen melden.
          </p>

          <div className="grid-sm2">
            <TextInput label="Vorname*" inputName="Vorname" required />
            <TextInput label="Nachname*" inputName="Nachname" required />
          </div>

          <div className="grid-sm2">
            <TextInput inputName="E-Mail" label="E-Mail*" required />
            <TextInput inputName="Telefonnummer" label="Telefonnummer" required={false} />
          </div>

          <TextInput inputName="Betreff" label="Betreff*" required />
          <TextArea inputName="Nachricht" label="Nachricht*" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <span style={{ width: '100%', textAlign: 'right' }}>* ist erforderlich.</span>
          <button
            type="submit"
            className={`buttonprimary ${styles.colFull}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Senden'}
          </button>
        </Flexbox>
      </form>

      <ErrorPopup
        isVisible={showErrorPopup}
        onClose={handleCloseErrorPopup}
        message={errorMessage}
      />
    </Grid>
  );
}

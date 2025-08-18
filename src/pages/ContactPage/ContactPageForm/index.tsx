import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './_ContactForm.module.scss';
import { Flexbox } from '../../../components/Flexbox';
import { TextInput } from './FormInput';
import { TextArea } from './FormArea';
import { ErrorPopup } from './FormErrorPopup';

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
      <form name="contact" netlify-honeypot="bot-field" hidden>
        <div><div>
          <input type="text" name="Vorname" />
          <input type="text" name="Nachname" />
        </div>
        <div>
          <input type="email" name="E-Mail" />
          <input type="phone" name="Telefonnummer" />
        </div>
        <input type="text" name="Betreff" />
        <textarea name="Nachricht" />
        <button type="submit">Submit</button>
        </div>
      </form>
      {/* Sichtbares Formular */}
      <form
        className="card"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
      >
      <Flexbox flex='column' gap='medium'>
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <input name="bot-field" />
        </div>
        <div className='h2' >Kontaktformular</div>
        <p>Bitte füllen Sie das Formular aus, um mich zu kontaktieren. Ich werde mich so schnell wie möglich bei Ihnen melden.</p>
        <div className='grid-sm2'>
          <TextInput label="Vorname" inputName="Vorname" required={true} />
          <TextInput label="Nachname" inputName="Nachname" required={true} />
        </div>
        <div className='grid-sm2'>
          <TextInput inputName="E-Mail" label="E-Mail" required={true} />
          <TextInput inputName="Telefonnummer" label="Telefonnummer" required={false} />
        </div>
        <TextInput inputName="Betreff" label="Betreff" required={true} />
        <TextArea  inputName="Nachricht" label="Nachricht" />
        <button type="submit" className={`buttonprimary ${styles.colFull}`} disabled={isSubmitting}>{isSubmitting ? 'Wird gesendet...' : 'Senden'}</button>
        </Flexbox>
      </form>

      <ErrorPopup
        isVisible={showErrorPopup}
        onClose={handleCloseErrorPopup}
        message={errorMessage}
      />
    </section>
  );
}


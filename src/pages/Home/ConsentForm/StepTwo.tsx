/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useReactMediaRecorder } from 'react-media-recorder';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Icon } from 'src/components';
import { ConsentFormValues, LANGUAGES } from '../types';

const StepTwo = () => {
  const [allowedResponse, setAllowedResponsed] = useState<boolean>(false);
  const { getValues, setValue } = useFormContext<ConsentFormValues>();
  const values = getValues();
  const validAnswers = ['yes', 'no', 'oui', 'non'];
  const { messageOne, messageTwo } = (() => {
    if (values.language === LANGUAGES.FR) {
      return {
        messageOne:
          "Vous comprenez qu'en utilisant le site ou les services du site, vous acceptez d'être lié par cet accord. Si vous n'acceptez pas cet accord dans son intégralité, vous ne devez pas accepter ou utiliser le site ou les services du site.",
        messageTwo: `Êtes-vous d'accord avec cet accord ? Veuillez répondre en disant "Oui" ou "Non"`,
      };
    }

    return {
      messageOne:
        'You understand by using the site or site services, you agree to be bound by this agreement. If you do not accept this agreement in its entirety, you must not accept or use the site or the site services.',
      messageTwo: 'Do you agree to this agreement? Please respond by saying "Yes" or "No".',
    };
  })();
  // Capture user's response
  const {
    listening, // is recording or not
    transcript, // received text
    resetTranscript, // reset received text
    browserSupportsSpeechRecognition, // check browser support
  } = useSpeechRecognition({
    clearTranscriptOnListen: true,
    commands: [
      {
        matchInterim: true,
        command: validAnswers,
        callback: ({ command }) => {
          const text = String(command).toLowerCase();
          setValue('agree', values.language === LANGUAGES.EN ? text === 'yes' : text === 'oui');
        },
      },
    ],
  });
  // Capture audio
  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    stopStreamsOnStop: true,
    onStop: (blobUrl, blob) => {
      setValue('audio', blobUrl);
    },
  });

  // Read the agreement
  useEffect(() => {
    const message = new SpeechSynthesisUtterance(`${messageOne} ${messageTwo}`);
    message.lang = values.language;
    message.onend = () => {
      window.speechSynthesis.cancel();
      setAllowedResponsed(true);
    };
    window.speechSynthesis.speak(message);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [values.language]);

  // If browser not support, alert to user
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      window.alert("Browser doesn't support speech recognition.");
    }
  }, [browserSupportsSpeechRecognition]);

  // If user is speaking, auto stop and receive the text within 3s
  useEffect(() => {
    if (listening) {
      setTimeout(() => {
        stopRecording();
        SpeechRecognition.stopListening();
      }, 3000);
    }
  }, [listening, stopRecording]);

  // Toggle the mic button
  const handleToggleMic = () => {
    if (!listening) {
      startRecording();
      SpeechRecognition.startListening({ language: values.language });
    } else {
      stopRecording();
      SpeechRecognition.stopListening();
    }
  };

  const handleResetTranscript = () => {
    resetTranscript();
    setValue('agree', false);
    setValue('audio', '');
  };

  return (
    <>
      <p css={{ letterSpacing: '0.25px' }}>
        {messageOne}
        <br />
        <br />
        {messageTwo}
      </p>

      {!transcript || !values.audio ? (
        <Button
          onClick={handleToggleMic}
          disabled={!allowedResponse}
          css={{ width: '50px', height: '50px', borderRadius: '50%', margin: '48px auto 0', padding: 0 }}
        >
          <Icon icon={!listening ? 'mic' : 'pause'} size={20} />
        </Button>
      ) : (
        <>
          <div css={{ display: 'flex', alignItems: 'center', paddingLeft: '48px', marginTop: '48px' }}>
            <Button css={{ width: '50px', height: '50px', borderRadius: '50%', padding: 0 }}>
              <Icon icon="play" size={20} />
            </Button>
            <p css={{ fontSize: '16px', marginLeft: '16px' }}>
              {!validAnswers.includes(transcript)
                ? `Your answer "${transcript}" invalid. Please try again`
                : `You responded "${transcript}"`}
            </p>
          </div>

          <div css={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
            <Button onClick={handleResetTranscript}>
              <span>Retry</span>
              <Icon icon="spin" size={12} css={{ marginLeft: '8px' }} />
            </Button>
            <Button type="submit" css={{ marginLeft: '16px' }} disabled={!validAnswers.includes(transcript)}>
              <span>Save</span>
              <Icon icon="arrow-right" size={12} css={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default StepTwo;

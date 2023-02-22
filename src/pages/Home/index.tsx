/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { saveConsent } from 'src/utils';
import { FormProvider } from 'src/components';
import ConsentForm from './ConsentForm';
import { ConsentFormValues } from './types';

const Home = () => {
  const [step, setStep] = useState<number>(1);

  const handleSubmit = (values: ConsentFormValues) => {
    saveConsent(values);
    setStep(3);
  };

  return (
    <div>
      <h2 css={{ textAlign: 'center', paddinBottom: '16px' }}>Consent Form</h2>

      <FormProvider<ConsentFormValues> defaultValues={{ name: '', audio: '', language: '', agree: false }} onSubmit={handleSubmit}>
        <ConsentForm step={step} onSetStep={setStep} />
      </FormProvider>
    </div>
  );
};

export default Home;

/** @jsxImportSource @emotion/react */
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

interface ConsentFormProps {
  step: number;
  onSetStep: (step: number) => void;
}

const ConsentForm = ({ step, onSetStep }: ConsentFormProps) => (
  <div>
    {step === 1 && <StepOne onSetStep={onSetStep} />}
    {step === 2 && <StepTwo />}
    {step === 3 && <StepThree />}
  </div>
);

export default ConsentForm;

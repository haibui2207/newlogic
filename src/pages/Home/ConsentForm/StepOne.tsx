/** @jsxImportSource @emotion/react */
import { useFormContext } from 'react-hook-form';
import { Button, Icon, Input, Select } from 'src/components';
import { ConsentFormValues, LANGUAGES } from '../types';

interface Props {
  onSetStep: (step: number) => void;
}

const StepOne = ({ onSetStep }: Props) => {
  const { watch, register } = useFormContext<ConsentFormValues>();
  const values = watch();

  const languageOptions = [
    { label: 'English', value: LANGUAGES.EN },
    { label: 'French.', value: LANGUAGES.FR },
  ];

  return (
    <>
      <Input {...register('name')} label="Name" placeholder="Enter your name" />

      <Select
        {...register('language')}
        label="Language"
        placeholder="Select language"
        options={languageOptions}
        css={{ marginTop: '16px' }}
      />

      <div css={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
        <Button onClick={() => onSetStep(2)} disabled={!values.name || !values.language}>
          <span>Next</span>
          <Icon icon="arrow-right" size={12} css={{ marginLeft: '8px' }} />
        </Button>
      </div>
    </>
  );
};

export default StepOne;

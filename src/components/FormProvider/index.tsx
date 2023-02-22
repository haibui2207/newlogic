/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { FormProvider as RHFProvider, useForm, UseFormProps } from 'react-hook-form';

interface FormProviderProps<T extends Record<string, any>> {
  children?: ReactElement;
  onSubmit: (values: T) => void;
  defaultValues: UseFormProps<T, any>['defaultValues'];
}

const FormProvider = <T extends Record<string, any>>({ defaultValues, onSubmit, children }: FormProviderProps<T>) => {
  const methods = useForm<T>({ defaultValues });
  const handleSubmit = methods.handleSubmit(() => onSubmit(methods.getValues()));

  return (
    <RHFProvider {...methods}>
      <form onSubmit={handleSubmit}>{children}</form>
    </RHFProvider>
  );
};

export default FormProvider;

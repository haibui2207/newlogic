import { ConsentFormValues } from 'src/pages/Home/types';

const key = 'consents';

export const getAllConsensts = () => {
  let consents: ConsentFormValues[];

  try {
    const str = sessionStorage.getItem(key);
    consents = str ? JSON.parse(str) : [];
  } catch (error) {
    consents = [];
  }

  return consents;
};

export const saveConsent = (consent: ConsentFormValues) => {
  const allConsents = getAllConsensts();
  sessionStorage.setItem(key, JSON.stringify([...allConsents, consent]));
};

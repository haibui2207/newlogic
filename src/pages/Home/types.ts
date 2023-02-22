export enum LANGUAGES {
  EN = 'en',
  FR = 'fr',
}

export interface ConsentFormValues {
  name: string;
  audio: string;
  agree: boolean;
  language: LANGUAGES | '';
}

export interface IObjectKeys {
  [key: string]: string | number | boolean | undefined;
}

export interface IFormFields extends IObjectKeys {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

export const FormFields: Array<IFormFields> = [
  {
    id: 'name',
    label: 'name',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    id: 'zip',
    label: 'Zip',
    type: 'text',
  },
  {
    id: 'street',
    label: 'Street',
    type: 'text',
  },
  {
    id: 'district',
    label: 'District',
    type: 'text',
  },
  {
    id: 'city',
    label: 'City',
    type: 'text',
  },
  {
    id: 'state',
    label: 'State',
    type: 'text',
  },
];

import React, { useState } from 'react';
import { FormFields } from './form-fields';

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}

Object.typedKeys = Object.keys as any;

const Form2 = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    password: null,
    zip: null,
    street: null,
    district: null,
    city: null,
    state: null,
  });

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { id, value } = event.currentTarget;

    setForm({ ...form, [id]: value });
  }

  function formFieldValueKey(): any {
    for (let key of Object.typedKeys(FormFields)) {
      FormFields[key];
    }
  }

  function handleSubmit(event: any) {
    (event as Event).preventDefault();
  }

  const formFields = (
    <div>
      {FormFields.map(({ id, label, type, required }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={formFieldValueKey()}
            onChange={handleChange}
            required={required}
          />
        </div>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {formFields}
      <button>Submit</button>
    </form>
  );
};

export default Form2;

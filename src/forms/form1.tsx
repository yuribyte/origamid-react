import { FormEventHandler, useState } from 'react';

const Form1 = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleSubmit(event: Event | FormEventHandler | any) {
    (event as Event).preventDefault();
  }

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { id, value } = event.currentTarget;

    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={form.name} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default Form1;

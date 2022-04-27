import { FormEventHandler, useState } from 'react';

const Form1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event: Event | FormEventHandler | any) {
    (event as Event).preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Form1;

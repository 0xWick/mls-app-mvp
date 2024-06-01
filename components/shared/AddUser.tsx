// app/components/shared/AddUser.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('Client');
  const router = useRouter();

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    const user = { name, email, password, type };

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      setName('');
      setEmail('');
      setPassword('');
      setType('Client');
      router.refresh(); // Refresh the page to show the new user
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="Client">Client</option>
        <option value="Realtor">Realtor</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add User
      </button>
    </form>
  );
};

export default AddUser;

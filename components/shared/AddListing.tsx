// app/components/shared/AddListing.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddListing = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Active');
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const handleSubmit = async (event : any) => {
    event.preventDefault();
    const listing = { title, description, price: parseFloat(price), status, userId };

    const response = await fetch('/api/listings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listing),
    });

    if (response.ok) {
      setTitle('');
      setDescription('');
      setPrice('');
      setStatus('Active');
      setUserId('');
      router.refresh(); // Refresh the page to show the new listing
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Listing
      </button>
    </form>
  );
};

export default AddListing;

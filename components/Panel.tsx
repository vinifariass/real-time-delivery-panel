import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Panel({ onSelect }: { onSelect: (id: string) => void }) {
  const [deliveryPeople, setDeliveryPeople] = useState([]);
  const [status, setStatus] = useState('');
  const [group, setGroup] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/delivery-person', {
        params: { status, group },
      });
      setDeliveryPeople(res.data);
    };
    fetchData();
  }, [status, group]);

  return (
    <div className="w-64 p-4 bg-white shadow h-screen overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Entregadores</h2>
      <div className="mb-2">
        <label>Status:</label>
        <select value={status} onChange={e => setStatus(e.target.value)} className="w-full border p-1">
          <option value="">Todos</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>
      <div className="mb-4">
        <label>Grupo:</label>
        <input value={group} onChange={e => setGroup(e.target.value)} className="w-full border p-1" />
      </div>
      <ul>
        {deliveryPeople.map((p) => (
          <li key={p.id} className="cursor-pointer hover:underline" onClick={() => onSelect(p.id)}>
            {p.name} ({p.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
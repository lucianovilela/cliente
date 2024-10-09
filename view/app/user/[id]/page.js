"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDetail({params}) {
  const router = useRouter();

  const { id } = params;
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (id) {
      // Buscar o usuário com base no ID
      fetch(`https://3000-lucianovilela-cliente-n013wmzgp62.ws-us116.gitpod.io/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id]);

  const handleUpdate = async () => {
    await fetch(`https://3000-lucianovilela-cliente-n013wmzgp62.ws-us116.gitpod.io/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    // Redireciona para a página inicial após a atualização
    router.push('/user');
  };

  const handleDelete = async () => {
    await fetch(`https://3000-lucianovilela-cliente-n013wmzgp62.ws-us116.gitpod.io/users/${id}`, {
      method: 'DELETE',
    });

    // Redireciona para a página inicial após a exclusão
    router.push('/user');
  };

  return (
<div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
  <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">Editar Usuário</h1>
  
  {/* Campo de Nome */}
  <div className="mb-4">
    <label className="block text-gray-600 text-sm font-medium mb-2">Nome:</label>
    <input
      type="text"
      value={user.name}
      onChange={(e) => setUser({ ...user, name: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  {/* Campo de Email */}
  <div className="mb-6">
    <label className="block text-gray-600 text-sm font-medium mb-2">Email:</label>
    <input
      type="email"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  {/* Botões de Ação */}
  <div className="flex justify-between">
    <button
      onClick={handleUpdate}
      className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold mr-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Atualizar
    </button>
    <button
      onClick={handleDelete}
      className="w-1/2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md font-semibold ml-2 focus:outline-none focus:ring-2 focus:ring-red-300"
    >
      Excluir
    </button>
  </div>
</div>

  );
}

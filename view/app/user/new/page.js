"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch('https://3000-lucianovilela-cliente-n013wmzgp62.ws-us116.gitpod.io/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    // Redireciona para a página inicial após criar o usuário
    router.push('/user');
  };

  return (
<div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-12">
  <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Criar Novo Usuário</h1>
  
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Campo de Nome */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Nome:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite o nome"
      />
    </div>

    {/* Campo de Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Digite o email"
      />
    </div>

    {/* Botão de Salvar */}
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
    >
      Salvar
    </button>
  </form>
</div>

  );
}

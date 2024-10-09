"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

const  SERVER=process.env.NEXT_PUBLIC_URL_SERVER || 'http://localhost:3000'
export default function Home() {
  const [users, setUsers] = useState([]);

  // Buscar todos os usuários na API
  useEffect(() => {
    async function fetchUsers() {

      const response = await fetch(`${SERVER}/users`);
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
<div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Lista de Usuários</h1>
  
  {/* Botão para criar novo usuário */}
  <div className="flex justify-end mb-6">
    <Link href="/user/new">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200">
        Criar Novo Usuário
      </button>
    </Link>
  </div>
  
  {/* Lista de Usuários */}
  <ul className="space-y-4">
    {users.map((user) => (
      <li
        key={user.id}
        className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200"
      >
        {/* Informações do usuário */}
        <div>
          <span className="block text-lg font-semibold text-gray-700">{user.name}</span>
          <span className="text-gray-500">{user.email}</span>
        </div>

        {/* Botão para ver detalhes */}
        <Link href={`/user/${user.id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200">
            Ver Detalhes
          </button>
        </Link>
      </li>
    ))}
  </ul>
</div>

  );
}

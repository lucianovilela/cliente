import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <a
        href="/user"
        className="w-64 h-32 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl flex justify-center items-center transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        <span className="text-lg">Ir para a Página de Usuários</span>
      </a>
    </div>

  );
}

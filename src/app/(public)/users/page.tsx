"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  return (
    <div className="bg-white bg-opacity-60 border-2 border-opacity-60 backdrop-blur-md p-5 rounded-lg shadow-lg">
      <form
        onSubmit={(e) => {
          router.push("/");
          e.preventDefault();
        }}
        className="text-black p-10 rounded-lg shadow-3xl shadow-slate-900"
      >
        <div className="flex justify-center pb-8">
          <h1 className="font-bold text-2xl">Cadastre-se</h1>
        </div>
        <div className="my-7 flex flex-col">
          <label className="font-semibold">Nome:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="border-b-2 outline-none border-blue-950 bg-transparent"
            required
          />
        </div>
        <div className="my-7 flex flex-col">
          <label className="font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-b-2 outline-none border-blue-950 bg-transparent"
            required
          />
        </div>
        <div className="my-7 flex flex-col">
          <label className="font-semibold">Senha:</label>
          <input
            type="password"
            name="senha"
            id="senha"
            className="border-b-2 outline-none border-blue-950 bg-transparent"
            required
          />
        </div>
        <div className="my-5">
          <label className="font-semibold">Genero:</label>
          <select name="generi" id="genero" className="mx-3 border-blue-950 bg-transparent">
            <option value="E">Escolher</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="O">Outro</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Idade:</label>
          <input
            type="date"
            value=""
            name="data"
            id="data"
            className="mx-3 bg-transparent"
          />
        </div>
        <div className="flex justify-center pt-12">
          <button
            type="submit"
            className="bg-black text-white rounded-lg w-36 p-2 font-serif text-lg border-transparent hover:text-amber-500 hover:bg-gray-800"
          >
            Registrar
          </button>
        </div>
        <div className="m-5">
          <p className="text-xs">
            Caso já possua acesso ao nosso site, faça{" "}
            <Link href="/" className="font-bold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

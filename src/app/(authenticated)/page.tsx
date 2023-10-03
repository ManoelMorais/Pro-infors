"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white bg-opacity-60 border-2 border-opacity-60 backdrop-blur-md p-5 rounded-lg shadow-lg">
      <form
        onSubmit={(e) => {
          router.push("/");
          e.preventDefault();
        }}
        className=" text-black p-10 rounded-lg shadow-3xl shadow-slate-900"
      >
        <div className="flex justify-center pb-8">
          <h1 className="font-bold text-3xl">Login</h1>
        </div>
        <div className="flex justify-center">
          <p className="indent-4 w-80 text-justify">
            Seja bem vindo ao nosso site, aproveite tudo o que oferecemos e não
            perca nada
          </p>
        </div>
        <div className="my-7 flex flex-row justify-center">
          <input
            type="email"
            name="email"
            id="email"
            className="border-b-2 outline-none  bg-transparent border-blue-950 "
            required
            placeholder="Email:"
          />
        </div>
        <div className="my-7 flex flex-row justify-center">
          <input
            type="password"
            name="senha"
            id="senha"
            className="border-b-2 outline-none bg-transparent text-black border-blue-950 "
            required
            placeholder="Senha:"
          />
        </div>
        <div className="flex justify-center p-5">
          <Link href="/sit">
            <button
              type="submit"
              className="bg-black text-white rounded-lg w-36 p-2 font-serif text-lg border-transparent hover:text-amber-500 hover:bg-gray-800"
            >
              Entrar
            </button>
          </Link>
        </div>
        <div className="flex justify-center text-xs">
          <p>
            Caso não possua conta em nosso site,{" "}
            <Link href="/users" className="font-semibold">
              Registre-se
            </Link>{" "}
            aqui
          </p>
        </div>
      </form>
    </div>
  );
}

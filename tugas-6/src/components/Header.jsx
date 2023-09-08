import { BsCodeSlash } from "react-icons/bs";

export default function Header() {
  return (
    <header className="max-w-screen h-16 bg-slate-800 text-white flex flex-row items-center gap-4 pl-4 top-0 sticky">
      <BsCodeSlash size="30px" className="bg-cyan-700 p-1 rounded-full" />
      <div className="text-3xl ">Fadli.ft</div>
    </header>
  );
}

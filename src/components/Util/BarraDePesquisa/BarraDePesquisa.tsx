export default function BarraDePesquisa() {
    return (
        <div className="my-4 flex items-center rounded-3xl bg-slate-200 pl-4 pr-12 sm:w-[400px]">
            <i className="fa-solid fa-magnifying-glass text-gray-700"></i>

            <input className="h-10 pl-4 outline-none border-none" type="text" placeholder="Buscar por..." />
        </div>
    );
}

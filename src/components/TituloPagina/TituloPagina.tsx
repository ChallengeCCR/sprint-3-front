export default function TituloPagina(props: { children: React.ReactNode; iconeTitulo: string }) {
    const { children, iconeTitulo } = props;

    return (
        <div className="flex items-center justify-center  text-center gap-3 p-4 rounded-xl bg-slate-100 shadow-md">
            <i className={`fa-solid fa-${iconeTitulo} text-red-700 text-3xl`} />
            <p className="text-3xl font-semibold text-gray-800">{children}</p>
        </div>
    );
}

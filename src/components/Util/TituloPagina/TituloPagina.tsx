export default function TituloPagina(props: { children: React.ReactNode; iconeTitulo: string }) {
    const { children, iconeTitulo } = props;

    return (
        <>
            <div className="flex justify-center items-center gap-2 font-thin p-2 rounded-xl">
                <i className={`fa-solid fa-${iconeTitulo} text-red-700 text-2xl`}></i>
                <p className="text-2xl align-text-bottom">{children}</p>
            </div>
        </>
    );
}

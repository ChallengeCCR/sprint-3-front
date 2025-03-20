import Link from "next/link";

export default function BotaoPrimario(props: { children: React.ReactNode; enderecoLink: string; funcaoAoClicar?: () => void }) {
    const { children, enderecoLink, funcaoAoClicar } = props;
    return (
        <Link
            href={enderecoLink}
            className="bg-red-700 text-white mt-4 flex h-14 w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 
                       items-center justify-center rounded-xl text-lg md:text-xl font-bold shadow-2xl 
                       hover:bg-red-800 hover:shadow-lg transition-all"
            onClick={funcaoAoClicar}
        >
            {children} {/* O conteúdo do botão entra como children */}
        </Link>
    );
}

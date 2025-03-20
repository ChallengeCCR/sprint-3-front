import BotaoPrimario from "@/components/BotaoPrimario/BotaoPrimario";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-6">
            <h2 className="text-xl text-center px-4 max-w-5/6">
                Com o <span className="font-bold">Autorail Monitor</span> você garante uma experiência mais agradável durante suas viagens.
            </h2>

            <div className="flex flex-col gap-4 mt-6 p-2 lg:flex-row max-w-screen">
                <CaixaInformacao iconeCaixa="bell">Acompanhe e receba alertas em tempo real e fique sempre ligado nos acontecimentos do seu transporte!</CaixaInformacao>
                <CaixaInformacao iconeCaixa="hourglass">Economize seu tempo e evite imprevistos, confira o status dos serviços e planeje suas viagens.</CaixaInformacao>
                <CaixaInformacao iconeCaixa="mobile">Acesse todas as informações de qualquer lugar, a qualquer momento</CaixaInformacao>
            </div>

            <BotaoPrimario enderecoLink="/login">Comece agora</BotaoPrimario>
        </div>
    );
}

// Essa é cada uma das caixinhas que aparecem na página inicial
export function CaixaInformacao(props: { children: React.ReactNode; iconeCaixa: string }) {
    const { children, iconeCaixa } = props;
    return (
        <div className="bg-gray-200 p-4  w-full sm:w-96 flex gap-4 flex-col sm:flex-row justify-center items-center rounded-xl shadow-md">
            <i className={`fa-solid fa-${iconeCaixa} text-gray-700 text-[50px]`}></i> {/* Ícone */}
            <p className="text-base sm:text-lg mt-2 text-center sm:text-left">{children}</p>
        </div>
    );
}

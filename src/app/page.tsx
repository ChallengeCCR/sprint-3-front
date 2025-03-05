import BotaoPrimario from "@/components/Util/BotaoPrimario/BotaoPrimario";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center py-6">

      <h2 className="p-3 text-xl text-center sm:max-w-2/4 lg:max-w-2/6">Com o <span className="font-bold">Autorail Monitor</span> você garante uma experiência mais agradável durante suas viagens.</h2>

      <CaixaDiferencial iconeCaixa="bell">Acompanhe alertas em tempo real</CaixaDiferencial>
      <CaixaDiferencial iconeCaixa="hourglass">Salve seu tempo e evite imprevistos</CaixaDiferencial>
      <CaixaDiferencial iconeCaixa="mobile">Acesse de qualquer lugar</CaixaDiferencial>

      <BotaoPrimario enderecoLink="/login">Comece agora</BotaoPrimario>
    </div>
  );
}


export function CaixaDiferencial(props: { children: React.ReactNode, iconeCaixa: string }) {
  const { children, iconeCaixa } = props;
  return (
    <div className="bg-slate-300 p-2 w-11/12 text-center flex flex-col justify-center items-center rounded-xl mb-2 sm:max-w-2/4">
      <i className={`fa-solid fa-${iconeCaixa} text-gray-700 text-[40px] font-light`}></i>

      <p className="text-lg mt-1 font-light">{children}</p>
    </div>
  )
}
import BarraDePesquisa from "@/components/Util/BarraDePesquisa/BarraDePesquisa";
import TituloPagina from "@/components/Util/TituloPagina/TituloPagina";

export default function Estacoes() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4">
            {/* Configurar o "título" da página aqui */}
            <TituloPagina iconeTitulo="sign-hanging">Status das Estações</TituloPagina>
            <BarraDePesquisa></BarraDePesquisa>
        </div>
    );
}

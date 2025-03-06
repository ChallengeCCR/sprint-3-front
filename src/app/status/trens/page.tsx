import BarraDePesquisa from "@/components/Util/BarraDePesquisa/BarraDePesquisa";
import TituloPagina from "@/components/Util/TituloPagina/TituloPagina";

export default function Linhas() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4">
            {/* Configurar o "título" da página aqui */}
            <TituloPagina iconeTitulo="train">Status dos Trens</TituloPagina>
            <BarraDePesquisa></BarraDePesquisa>
        </div>
    );
}

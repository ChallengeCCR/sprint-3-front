"use client";
import BarraDePesquisa from "@/components/BarraDePesquisa/BarraDePesquisa";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function Alertas() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4">
            {/* Título da página */}
            <TituloPagina iconeTitulo="clock">Alertas Encerrados</TituloPagina>
            <BarraDePesquisa />

            {/* Os alertas ficam aqui */}
            <div className="flex justify-center flex-wrap gap-4 w-full md:max-w-[1200px] px-4 py-2">
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Oiiiiiiii" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
            </div>
        </div>
    );
}

// Caixa de Alerta
export function CaixaAlerta(props: { titulo: string; descricao: string; data: string; grauGravidade: number }) {
    const { titulo, descricao, data } = props;

    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false); // Por padrão os detalhes dos alertas virão vazios

    return (
        <div className={`transition-all duration-300 ${detalhesVisiveis ? "h-auto" : "h-fit"} w-full max-w-[340px] flex flex-col border-2 border-gray-500 rounded-xl p-4 my-4 shadow-md`}>
            {/* Título e gravidade */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-xl w-full text-left">{titulo}</h2>
                <p className={`bg-red-800 text-white rounded-full px-3 py-1 text-sm font-light`}>Encerrado</p>
            </div>

            {/* Data de encerramento */}
            <p className="text-gray-500 mb-2">Data criação: {data}</p>
            <p className="text-gray-500 mb-2">Data encerramento: {data}</p>

            {/* Descrição só é exibida quando clicado em detalhes */}
            <div className={`${detalhesVisiveis ? "block" : "hidden"} bg-slate-100 p-3 rounded-xl my-2`}>
                <h3 className="font-bold mb-1">Descrição:</h3>
                <p className="text-justify text-sm">{descricao}</p>
            </div>

            <p className={`cursor-pointer text-lg font-semibold text-red-700 underline ${detalhesVisiveis ? "text-red-700" : "text-blue-600"} self-center`} onClick={() => setDetalhesVisiveis(!detalhesVisiveis)}>
                {detalhesVisiveis ? "Ocultar detalhes" : "Ver detalhes"}
            </p>
        </div>
    );
}

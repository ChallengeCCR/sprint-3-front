"use client";
import BarraDePesquisa from "@/components/BarraDePesquisa/BarraDePesquisa";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function Alertas() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4">
            {/* Título da página e barra de pesquisa*/}
            <TituloPagina iconeTitulo="triangle-exclamation">Alertas Ativos</TituloPagina>
            <BarraDePesquisa />

            {/* Os alertas ficam aqui */}
            <div className="flex justify-center flex-wrap gap-4 w-full md:max-w-[1200px] px-4 py-2">
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
                <CaixaAlerta titulo="Exemplo Alerta 01" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={1} />
                <CaixaAlerta titulo="Exemplo Alerta 02" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta 03" descricao="Exemplo de uma descrição para alertas" data="25/03/2025 - 12:00" grauGravidade={3} />
            </div>
        </div>
    );
}

// Caixa de Alerta
export function CaixaAlerta(props: { titulo: string; descricao: string; data: string; grauGravidade: number }) {
    const { titulo, descricao, data, grauGravidade } = props;

    // Mapa das cores
    const gravidadeMap: Record<number, { cor: string; texto: string }> = {
        1: { cor: "bg-green-200", texto: "Leve" }, // Número 1 vai passar a cor verde e o texto leve
        2: { cor: "bg-amber-200", texto: "Médio" }, // Número 2 vai passar a cor amarela e o texto médio
        3: { cor: "bg-red-300", texto: "Grave" }, // Número 3 vai passar a cor vermelha e o texto grave
    };
    const { cor: corDaGravidade, texto: textoGravidade } = gravidadeMap[grauGravidade] || { cor: "bg-gray-200", texto: "- - -" }; // Caso seja um ícone errado

    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false); // Por padrão os detalhes dos alertas virão vazios

    return (
        <div className={`transition-all duration-300 ${detalhesVisiveis ? "h-auto" : "h-fit"} w-full max-w-[340px] flex flex-col border-2 border-gray-500 rounded-xl p-4 shadow-md`}>
            {/* Título e gravidade */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-xl w-full text-left">{titulo}</h2>
                <p className={`${corDaGravidade} rounded-full px-3 py-1 text-sm font-light`}>{textoGravidade}</p>
            </div>

            <p className="text-gray-500 mb-2">{data}</p>

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

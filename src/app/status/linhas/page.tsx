"use client";
import SelectCustomizado from "@/components/SelectCustomizado/SelectCustomizado";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function Linhas() {
    const [linhaSelecionada, setLinhaSelecionada] = useState("");

    // Aqui estão as informações que serão exibidas no select, são provisórias apenas para demonstração
    const dadosLinha = [
        { label: "Linha", valor: linhaSelecionada || "- - -", cor: linhaSelecionada ? (linhaSelecionada === "8 - Diamante" ? "bg-cyan-300" : "bg-pink-300") : "bg-gray-300" },
        { label: "Status", valor: linhaSelecionada ? "Normal" : "- - -", cor: linhaSelecionada ? "bg-green-300" : "bg-gray-300" },
        { label: "Qtd. Estações", valor: linhaSelecionada ? "10" : "- - -", cor: "bg-gray-300" },
        { label: "Intervalo entre trens", valor: linhaSelecionada ? "3 min" : "- - -", cor: "bg-gray-300" },
        { label: "Capacidade", valor: linhaSelecionada ? "50000 pessoas" : "- - -", cor: "bg-gray-300" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4 px-2">
            {/* Título da página e "instrução" de uso */}
            <TituloPagina iconeTitulo="train">Status Linhas</TituloPagina>
            <p className="max-w-[90%] sm:max-w-[80%] text-center p-4 text-lg">Selecione uma linha para obter mais informações.</p>

            {/* Componentes de select para selecionar a estação */}
            <SelectCustomizado
                onChange={(linha) => setLinhaSelecionada(linha)}
                label="Escolha uma linha"
                options={[
                    { label: "Linha 8 - Diamante", value: "8 - Diamante" },
                    { label: "Linha 9 - Esmeralda", value: "9 - Esmeralda" },
                ]}
            />

            {/* Informações da Linha */}
            <div className="flex flex-col gap-6 items-start mt-6 p-6 w-full max-w-[600px] bg-gray-200 rounded-2xl shadow-md">
                {dadosLinha.map((dado, index) => (
                    <InfoItem key={index} {...dado} />
                ))}
            </div>
        </div>
    );
}

// Caixinha dos itens que exibe as informações
export function InfoItem(props: { label: string; valor: string; cor: string }) {
    const { label, valor, cor } = props;
    return (
        <p className="text-xl">
            {label}: <span className={`px-4 py-2 rounded-full font-semibold ${cor}`}>{valor}</span>
        </p>
    );
}

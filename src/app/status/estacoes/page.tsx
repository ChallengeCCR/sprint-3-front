"use client";
import SelectCustomizado from "@/components/SelectCustomizado/SelectCustomizado";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function Estacoes() {
    const [estacaoSelecionada, setEstacaoSelecionada] = useState("");

    // Aqui estão as informações que serão exibidas no select, são provisórias apenas para demonstração
    const dadosEstacao = [
        { label: "Estação", valor: estacaoSelecionada || "- - -", cor: estacaoSelecionada ? "bg-blue-300" : "bg-gray-300" },
        { label: "Status", valor: estacaoSelecionada ? "Normal" : "- - -", cor: estacaoSelecionada ? "bg-green-300" : "bg-gray-300" },
        { label: "Qtd. Trens na estação", valor: estacaoSelecionada ? "5" : "- - -", cor: "bg-gray-300" },
        { label: "Capacidade da Estação", valor: estacaoSelecionada ? "1000 pessoas" : "- - -", cor: "bg-gray-300" },
        { label: "Intervalo de chegada", valor: estacaoSelecionada ? "5 min" : "- - -", cor: "bg-gray-300" },
    ];

    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4 px-2">
            {/* Título da página e "instrução" de uso */}
            <TituloPagina iconeTitulo="sign-hanging">Status Estações</TituloPagina>
            <p className="max-w-[90%] sm:max-w-[80%] text-center p-4 text-lg">Selecione uma estação para obter mais detalhes.</p>

            {/* Componente select para selecionar a estação desejada */}
            <SelectCustomizado
                onChange={(estacao) => setEstacaoSelecionada(estacao)}
                label="Escolha uma estação"
                options={[
                    { label: "Estação Osasco", value: "Osasco" },
                    { label: "Estação Lapa", value: "Lapa" },
                ]}
            />

            {/* Informações da Estação */}
            <div className="flex flex-col gap-6 items-start mt-6 p-6 w-full max-w-[600px] bg-gray-200 rounded-2xl shadow-md">
                {dadosEstacao.map((dado, index) => (
                    <InfoItem key={index} {...dado} />
                ))}
            </div>
        </div>
    );
}

// Caixinha dos itens
export function InfoItem(props: { label: string; valor: string; cor: string }) {
    const { label, valor, cor } = props;
    return (
        <p className="text-xl">
            {label}: <span className={`px-4 py-2 rounded-full font-semibold ${cor}`}>{valor}</span>
        </p>
    );
}

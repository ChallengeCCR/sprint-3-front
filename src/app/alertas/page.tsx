"use client";
import BarraDePesquisa from "@/components/Util/BarraDePesquisa/BarraDePesquisa";
import TituloPagina from "@/components/Util/TituloPagina/TituloPagina";
import { useState } from "react";

export default function Alertas() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4">
            {/* Configurar o "título" da página aqui */}
            <TituloPagina iconeTitulo="triangle-exclamation">Alertas Registrados</TituloPagina>
            <BarraDePesquisa></BarraDePesquisa>

            {/* Os alertas serão exibidos aqui, 3 exemplos com diferentes graus */}
            <div>
                <CaixaAlerta
                    titulo="Exemplo Alerta"
                    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam, fuga aspernatur corrupti totam hic nisi possimus dolor id libero ipsa! Possimus eius similique excepturi eos delectus accusantium perspiciatis ipsum maiores veniam! Eum ab aliquid modi iusto, animi repellendus assumenda numquam maiores voluptatem autem! "
                    data="25/03/2025 - 12:00"
                    grauGravidade={1}
                />
                <CaixaAlerta titulo="Exemplo Alerta" descricao="Oi fofinho ><" data="25/03/2025 - 12:00" grauGravidade={2} />
                <CaixaAlerta titulo="Exemplo Alerta" descricao="Exemplo de uma descrição para alertasa" data="25/03/2025 - 12:00" grauGravidade={3} />
            </div>
        </div>
    );
}

// Enquanto o código não for integrado com a api as datas serão usadas como string
export function CaixaAlerta(props: { titulo: string; descricao: string; data: string; grauGravidade: number }) {
    const { titulo, descricao, data, grauGravidade } = props;

    // Mapa das cores
    const gravidadeMap: Record<number, { cor: string; texto: string }> = {
        1: { cor: "bg-green-200", texto: "Grau Baixo" },
        2: { cor: "bg-amber-200", texto: "Grau Médio" },
        3: { cor: "bg-red-300", texto: "Grau Alto" },
    };
    const { cor: corDaGravidade, texto: textoGravidade } = gravidadeMap[grauGravidade] || { cor: "bg-gray-200", texto: "Grau Desconhecido" };

    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false); // Por padrão os detalhes dos alertas virão vazios

    return (
        <div className="w-[340px] flex flex-col border-2 border-gray-500 rounded-xl p-4 my-2">
            {/* Título e gravidade */}
            <div className="flex justify-between">
                <h2 className="font-bold text-xl w-auto">{titulo}</h2>
                <p className={`${corDaGravidade} rounded-xl px-2 font-light`}>{textoGravidade}</p> {/* Adicionar funcionalidade para os "temas" de gravidade aqui*/}
            </div>

            <p>{data}</p>

            {/* Descrição, só é exibida quando clicado em detalhes */}
            <div className={`${detalhesVisiveis ? "grid" : "hidden"} bg-slate-200 p-2 rounded-xl my-2`}>
                <h3 className="font-bold">Descrição:</h3>
                <p className="text-justify">{descricao}</p>
            </div>

            <p className={`${detalhesVisiveis ? "text-red-700" : "Ver detalhes"} self-center font-bold text-lg underline cursor-pointer`} onClick={() => setDetalhesVisiveis(!detalhesVisiveis)}>
                {detalhesVisiveis ? "Ocultar detalhes" : "Ver detalhes"}
            </p>
        </div>
    );
}

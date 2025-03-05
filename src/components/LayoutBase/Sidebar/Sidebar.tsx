"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {

    // Definindo se a sidebar está colapsada ou não
    const [colapsado, setColapsado] = useState(true);

    return (
        <div className="flex">
            <aside className={`flex-col justify-start bg-black px-2 text-white flex transition-all
                ${colapsado ?
                    "rounded-xl h-16 w-16 sm:h-screen sm:rounded-none" :
                    "rounded-none h-screen bg-blue "}`
            }>

                {/* Botão que seta o status de colapsado */}
                <button
                    className={`bg-gray-700 flex justify-center items-center my-4 py-2 rounded-xl ${!colapsado && "max-h-8"}`}
                    onClick={() => setColapsado(!colapsado)}>

                    {/* Trocando o ícone de acordo com o estado */}
                    <i className={`fa-solid ${colapsado ? "fa-bars" : "fa-arrow-left"} text-xl transition-all`}></i>
                </button>


                {/* Criando os grupos */}
                <GrupoLinks nomeGrupo="Status"
                    items={[
                        { textoLink: "Alertas", iconeLink: "fa-triangle-exclamation", enderecoLink: "/" },
                        { textoLink: "Linhas", iconeLink: "fa-sign-hanging", enderecoLink: "/" },
                        { textoLink: "Estações", iconeLink: "fa-train", enderecoLink: "/" },
                        { textoLink: "Trens", iconeLink: "fa-road", enderecoLink: "/" },
                    ]}
                    colapsado={colapsado}
                />

                <GrupoLinks nomeGrupo="Suporte"
                    items={[
                        { textoLink: "Canais de Ajuda", iconeLink: "fa-headset", enderecoLink: "/" },
                        { textoLink: "AUMO+", iconeLink: "fa-robot", enderecoLink: "/" },
                        { textoLink: "Sobre o Projeto", iconeLink: "fa-circle-info", enderecoLink: "/" }]}
                    colapsado={colapsado}
                />

                <GrupoLinks nomeGrupo="Suporte"
                    items={[
                        { textoLink: "Minha Conta", iconeLink: "fa-user-gear", enderecoLink: "/" },
                        { textoLink: "Tema Claro", iconeLink: "fa-sun", enderecoLink: "/" }]}
                    colapsado={colapsado}
                />

            </aside>
        </div >
    )
}

// Grupos com links
export function GrupoLinks(props: {
    nomeGrupo: string; items: { enderecoLink: string; iconeLink: string; textoLink: string }[]; colapsado: boolean
}) {
    const { nomeGrupo, items, colapsado } = props;
    return (
        <div className="flex flex-col mb-4  sm:border-y sm:py-2 sm:border-gray-700">
            {/* Exibindo o nome do grupo e os itens */}
            {!colapsado && <h2 className="mb-2 text-sm text-gray-400">{nomeGrupo}</h2>}

            {/* Itens da categoria */}
            {items.map((item, index) => (
                <LinkLateral
                    key={index} textoLink={item.textoLink} iconeLink={item.iconeLink} enderecoLink={item.enderecoLink} colapsado={colapsado}
                />
            ))}
        </div>
    )
}

// Elementos links
export function LinkLateral(props: { textoLink: string, iconeLink: string, enderecoLink: string, colapsado: boolean }) {
    const { textoLink, iconeLink, enderecoLink, colapsado } = props;

    return (
        // Arrumar depois para quando não estiver colapsado a partir de sm:*
        <Link
            href={enderecoLink}
            className={`${colapsado ?
                "hidden sm:flex justify-center p-3 mb-2 rounded-xl hover:bg-slate-300" :
                "bg-gray-700 text-white flex items-center gap-2 rounded-xl size-full p-4 py-1 mb-2 transition-all hover:bg-slate-300 hover:text-black"}`}
        >
            {/* Ícone sempre alinhado à esquerda */}
            <i className={`fa-solid ${iconeLink} text-red-700 text-lg`}></i>

            {/* Texto ao lado do ícone */}
            {!colapsado && <span className="text-base">{textoLink}</span>}
        </Link>
    );
}
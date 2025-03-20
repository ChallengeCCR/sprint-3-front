"use client";
import BotaoPrimario from "@/components/BotaoPrimario/BotaoPrimario";
import SelectCustomizado from "@/components/SelectCustomizado/SelectCustomizado";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function RegistrarAlerta() {
    const [nomeAlerta, setNomeAlerta] = useState("");
    const [descricao, setDescricao] = useState("");
    const [gravidade, setGravidade] = useState("");

    // Opções de gravidade
    const opcoesGravidade = [
        { label: "Leve", value: "1" },
        { label: "Médio", value: "2" },
        { label: "Grave", value: "3" },
    ];

    // Função de confirmação
    const confirmarRegistro = (): void => {
        if (!nomeAlerta || !descricao || !gravidade) {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Alerta registrado");
            setNomeAlerta(""); // Zerar os campos
            setDescricao(""); // Zerar os campos
            setGravidade(""); // Zerar os campos
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12">
            <TituloPagina iconeTitulo="fa-solid fa-plus">Registrar Alerta</TituloPagina>

            {/* Formulário de registro */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2 w-full max-w-2xl sm:max-w-md flex flex-col justify-center">
                {/* Nome do alerta */}
                <div className="w-full">
                    <label htmlFor="nomeAlerta" className="block text-lg font-semibold text-gray-700 mt-4 mb-2">
                        Nome do Alerta
                    </label>
                    <input id="nomeAlerta" type="text" value={nomeAlerta} onChange={(e) => setNomeAlerta(e.target.value)} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 transition-all duration-200" placeholder="Digite o nome do alerta" required />
                </div>

                {/* Gravidade */}
                <SelectCustomizado label="Escolha a gravidade do alerta" options={opcoesGravidade} onChange={(valor) => setGravidade(valor)} />
                {/* Descrição */}
                <div className="w-full">
                    <label htmlFor="descricao" className="block text-lg font-semibold text-gray-700 mb-2">
                        Descrição
                    </label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 resize-none transition-all duration-200" placeholder="Descreva o alerta..." rows={4} required />
                </div>

                {/* Botão de confirmação */}
                <div className="w-full flex justify-center">
                    <BotaoPrimario enderecoLink="#" funcaoAoClicar={confirmarRegistro}>
                        Confirmar
                    </BotaoPrimario>
                </div>
            </form>
        </div>
    );
}

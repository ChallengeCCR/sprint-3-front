"use client";
import BotaoPrimario from "@/components/BotaoPrimario/BotaoPrimario";
import SelectCustomizado from "@/components/SelectCustomizado/SelectCustomizado";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function AtualizarStatus() {
    const [tipoServico, setTipoServico] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");

    // Opções do select para serviço
    const opcoesServico = [
        { label: "Linha", value: "linha" },
        { label: "Estação", value: "estacao" },
        { label: "Trem", value: "trem" },
    ];

    // Opções do select para status
    const opcoesStatus = [
        { label: "Operando normalmente", value: "normal" },
        { label: "Com lentidão", value: "lento" },
        { label: "Parado", value: "parado" },
    ];

    // Função que recebe a atualização e confirma
    const confirmarAtualizacao = (): void => {
        if (!tipoServico || !status || !descricao) {
            alert("Preencha todos os campos.");
        } else {
            alert("Status atualizado com sucesso!");
            setTipoServico("");
            setStatus("");
            setDescricao("");
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-8 px-4 sm:px-6 md:px-8 lg:px-12">
            <TituloPagina iconeTitulo="fa-solid fa-pen-to-square">Atualizar Status</TituloPagina>

            <form onSubmit={(e) => e.preventDefault()} className="mt-4 space-y-2 w-full max-w-2xl sm:max-w-md flex flex-col justify-center">
                {/* Tipo de serviço */}
                <SelectCustomizado label="Escolha o tipo de serviço" options={opcoesServico} onChange={(valor) => setTipoServico(valor)} />

                {/* Status */}
                <SelectCustomizado label="Escolha o status" options={opcoesStatus} onChange={(valor) => setStatus(valor)} />

                {/* Comentário */}
                <div className="w-full">
                    <label htmlFor="descricao" className="block text-lg font-semibold text-gray-700 mb-2">
                        Comentário para passageiros
                    </label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 resize-none transition-all duration-200" placeholder="Escreva uma breve descrição para os passageiros" rows={4} required />
                </div>

                {/* Botão */}
                <div className="w-full flex justify-center">
                    <BotaoPrimario enderecoLink="#" funcaoAoClicar={confirmarAtualizacao}>
                        Atualizar
                    </BotaoPrimario>
                </div>
            </form>
        </div>
    );
}

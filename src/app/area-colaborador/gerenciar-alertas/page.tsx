"use client";
import BarraDePesquisa from "@/components/BarraDePesquisa/BarraDePesquisa";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function Alertas() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-4">
            {/* Título da página */}
            <TituloPagina iconeTitulo="triangle-exclamation">Gerenciar Alertas</TituloPagina>
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

export function CaixaAlerta(props: { titulo: string; descricao: string; data: string; grauGravidade: number }) {
    const { titulo, descricao, data, grauGravidade } = props;

    const gravidadeMap: Record<number, { cor: string; texto: string }> = {
        1: { cor: "bg-green-200", texto: "Leve" },
        2: { cor: "bg-amber-200", texto: "Médio" },
        3: { cor: "bg-red-300", texto: "Grave" },
    };
    const { cor: corDaGravidade, texto: textoGravidade } = gravidadeMap[grauGravidade] || { cor: "bg-gray-200", texto: "Grau Desconhecido" };

    const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);
    const [popUpVisivel, setPopUpVisivel] = useState(false);

    return (
        <div className={`transition-all duration-300 ${detalhesVisiveis ? "h-auto" : "h-fit"} w-full max-w-[340px] flex flex-col border-2 border-gray-500 rounded-xl p-4 shadow-md`}>
            {/* Título e gravidade */}
            <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col flex-grow w-full">
                    <h2 className="font-semibold text-xl text-left w-[calc(100%-100px)]">{titulo}</h2>
                    <p className="text-gray-500 mb-2">{data}</p>
                </div>
                <div className="flex flex-col items-end">
                    <p className={`${corDaGravidade} rounded-full px-3 py-1 text-sm font-light`}>{textoGravidade}</p>

                    {/* Botões */}
                    <div className="mt-2 flex space-x-2">
                        <button className="text-red-600 hover:text-red-800" onClick={() => setPopUpVisivel(true)}>
                            <i className="fa-solid fa-trash mr-2" /> Excluir
                        </button>
                        <button className="text-blue-600 hover:text-blue-800" onClick={() => alert("Exibe o pop-up para editar, semelhante ao excluir, infelizmente não tive tempo de implementar")}>
                            <i className="fa-solid fa-pencil mr-2" /> Editar
                        </button>
                    </div>
                </div>
            </div>

            {/* Descrição */}
            <div className={`${detalhesVisiveis ? "block" : "hidden"} bg-slate-100 p-3 rounded-xl my-2`}>
                <h3 className="font-bold mb-1">Descrição:</h3>
                <p className="text-justify text-sm">{descricao}</p>
            </div>

            <p className={`cursor-pointer text-lg font-semibold underline ${detalhesVisiveis ? "text-red-700" : "text-gray-700"} self-center`} onClick={() => setDetalhesVisiveis(!detalhesVisiveis)}>
                {detalhesVisiveis ? "Ocultar detalhes" : "Ver detalhes"}
            </p>

            {/* Pop-up */}
            {popUpVisivel && <PopUpEncerramentoAlerta fecharPopUp={() => setPopUpVisivel(false)} />}
        </div>
    );
}

export function PopUpEncerramentoAlerta({ fecharPopUp }: { fecharPopUp: () => void }) {
    const [comentario, setComentario] = useState("");

    const handleConfirmar = () => {
        alert("Alerta encerrado com o comentário: " + comentario);
        fecharPopUp();
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white border-2 border-red-600 p-6 rounded-xl w-96">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Encerrar alerta?</h2>
                <p className="text-sm mb-4 text-gray-600">Este alerta deixará de ser visível para usuários comuns. Informe um comentário de encerramento.</p>

                <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Comentário de encerramento" className="resize-none w-full p-2 border-2 border-gray-300 rounded-lg mb-4" rows={4} />

                <div className="flex justify-end gap-4">
                    <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700" onClick={handleConfirmar}>
                        Encerrar
                    </button>
                    <button className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400" onClick={fecharPopUp}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}

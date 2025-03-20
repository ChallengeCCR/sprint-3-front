"use client";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function PaginaChatbot() {
    const [mensagem, setMensagem] = useState("");
    const [ultimaMensagem, setUltimaMensagem] = useState("");

    const enviarMensagem = (e: React.FormEvent) => {
        e.preventDefault();
        if (mensagem.trim() === "") return;
        // Atualizando a última mensagem
        setUltimaMensagem(mensagem);
        console.log("Mensagem enviada:", mensagem);
        setMensagem(""); // Limpa o campo e a mensagem
    };

    return (
        <div className="w-full h-screen flex flex-col justify-between items-center py-6 px-4">
            {/* Título da Página */}
            <TituloPagina iconeTitulo="robot">AUMO+</TituloPagina>

            {/* Texto de instrução */}
            <p className="p-4 text-lg text-center text-gray-600">Envie uma mensagem para iniciar a conversa</p>

            {/* Espaço para embed do Watson */}
            <div className="w-full max-w-[350px] md:max-w-2xl flex-1 flex items-center justify-center bg-gray-100 rounded-xl shadow-lg p-4 overflow-hidden">
                {!ultimaMensagem ? (
                    <p className="text-gray-500 text-center break-words">A EXIBIÇÃO DO WATSON SERÁ AQUI</p>
                ) : (
                    <p className="mt-4 text-gray-700 text-center break-words">
                        Sua última mensagem: <span className="font-bold">{ultimaMensagem}</span>
                    </p>
                )}
            </div>

            {/* Campo de entrada e botão de envio */}
            <form onSubmit={enviarMensagem} className="w-full max-w-2xl flex items-center gap-4 p-4">
                <input type="text" placeholder="Digite sua mensagem..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-700" />
                <button type="submit" className="bg-red-700 text-white px-6 py-3 rounded-xl hover:bg-red-800 hover:shadow-lg transition-all">
                    Enviar
                </button>
            </form>
        </div>
    );
}

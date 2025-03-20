"use client";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import Link from "next/link";
import { useState } from "react";

export default function PaginaAjuda() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    // Recebendo o evento de enviar o formulário e por enquanto apenas dando um alert para exibir os dados coletados
    const enviarFormulario = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.\n\nDetalhes fornecidos:\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`);
    };

    // Função para formatar telefones celulares enauanto digita
    const formatarTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
        let telefoneFormatado = value;

        if (value.length >= 2) telefoneFormatado = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        if (value.length >= 7) telefoneFormatado = `${telefoneFormatado.slice(0, 10)}-${telefoneFormatado.slice(10)}`;

        setTelefone(telefoneFormatado.slice(0, 15)); // Limita o tamanho máximo
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-6 px-4">
            {/* Título da página e chamariz */}
            <TituloPagina iconeTitulo="headset">Canal de Ajuda</TituloPagina>
            <h2 className="text-xl text-center px-4 max-w-5/6 m-6">Precisa de ajuda? Nossa equipe está pronta para te atender!</h2>

            {/* Caixa de contato por telefone */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full sm:w-96 mb-6 text-center">
                <p className="text-lg font-medium">Entre em contato pelo telefone:</p>
                <p className="text-2xl font-bold text-red-700 my-2">+55 (11) 12345-6789</p>
                <p className="text-sm text-gray-600">Atendimento disponível de segunda a sexta, das 8h às 18h.</p>
            </div>

            {/* Caixa do formulário de contato */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg w-full sm:w-96">
                <p className="text-lg text-center mb-4 font-medium">Ou preencha o formulário abaixo e nossa equipe retornará o contato o mais rápido possível.</p>

                <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
                    {/* Input de nome */}
                    <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-700 mt-2" required />

                    {/* Input de email */}
                    <input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-700 mt-2" required />

                    {/* Input de telefone */}
                    <input type="tel" placeholder="Seu telefone" value={telefone} maxLength={15} onChange={formatarTelefone} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-700 mt-2" required />

                    {/* Campo de mensagem */}
                    <textarea placeholder="Digite sua mensagem..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-700 resize-none h-32 mt-2" required></textarea>

                    <button type="submit" className="bg-red-700 text-white p-4 rounded-xl hover:bg-red-800 hover:shadow-lg transition-all">
                        Enviar Mensagem
                    </button>
                </form>
            </div>

            {/* Link para chatbot */}
            <div className="mt-6 text-center">
                <p className="text-base">
                    Precisa de uma resposta rápida?
                    <strong>
                        {" "}
                        {/* Esse Strong serve como font-bold */}
                        <Link href="/suporte/aumo">
                            <br />
                            <span className="text-red-700 font-bold hover:underline">Converse com nosso chatbot agora!</span>
                        </Link>
                    </strong>
                </p>
            </div>
        </div>
    );
}

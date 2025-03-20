"use client";
import TituloPagina from "@/components/TituloPagina/TituloPagina";
import { useState } from "react";

export default function PaginaConta() {
    const [foto, setFoto] = useState<File | null>(null);
    const [notificacao, setNotificacao] = useState<("email" | "telegram")[]>([]);

    const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFoto(e.target.files[0]);
        }
    };

    const handleNotificacaoChange = (value: "email" | "telegram") => {
        setNotificacao((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-6 px-4">
            {/* Título da Página */}
            <TituloPagina iconeTitulo="user">Minha Conta</TituloPagina>

            {/* Foto do Usuário */}
            <div className="relative mt-6">
                <label htmlFor="upload-foto" className="cursor-pointer">
                    <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        {foto ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={URL.createObjectURL(foto)} alt="Foto do usuário" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-500 text-4xl">
                                <i className="fa-solid fa-camera"></i>
                            </span>
                        )}
                    </div>
                </label>
                <input type="file" id="upload-foto" className="hidden" accept="image/*" onChange={handleFotoChange} />
            </div>

            {/* Nome do Usuário */}
            <h2 className="text-xl font-bold text-red-700 mt-2">@mtslma</h2>

            {/* Informações Gerais */}
            <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">Informações Gerais</h3>
                <p className="text-gray-700">
                    {/* Esse strong deixa o texto bold, mais fácil que usar span e font-bold */}
                    <strong>Nome:</strong> Mateus Lima
                </p>
                <p className="text-gray-700">
                    <strong>Email:</strong> mateus@email.com
                </p>
                <p className="text-gray-700">
                    <strong>Data de Registro:</strong> 25/03/2025
                </p>
            </div>

            {/* Notificações */}
            <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">Notificações</h3>
                <div className="flex gap-4">
                    <label className={`flex items-center gap-2 cursor-pointer ${notificacao.includes("email") ? "text-red-700" : ""}`}>
                        <input type="checkbox" value="email" checked={notificacao.includes("email")} onChange={() => handleNotificacaoChange("email")} className="hidden" />
                        <span className="w-4 h-4 border-2 border-red-700 rounded-full flex items-center justify-center">{notificacao.includes("email") && <span className="w-2 h-2 bg-red-700 rounded-full"></span>}</span>
                        Notificar via Email
                    </label>
                    <label className={`flex items-center gap-2 cursor-pointer ${notificacao.includes("telegram") ? "text-red-700" : ""}`}>
                        <input type="checkbox" value="telegram" checked={notificacao.includes("telegram")} onChange={() => handleNotificacaoChange("telegram")} className="hidden" />
                        <span className="w-4 h-4 border-2 border-red-700 rounded-full flex items-center justify-center">{notificacao.includes("telegram") && <span className="w-2 h-2 bg-red-700 rounded-full"></span>}</span>
                        Notificar via Telegram
                    </label>
                </div>
            </div>

            {/* Outros */}
            <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <h3 className="text-lg font-semibold mb-4">Outros</h3>
                <button className="w-auto text-red-700 font-semibold py-1.5 px-4 hover:bg-red-100 rounded-lg">Alterar Nome de Usuário</button>
                <button className="w-auto text-red-700 font-semibold py-1.5 px-4 hover:bg-red-100 rounded-lg mt-2">Alterar Senha</button>
            </div>
        </div>
    );
}

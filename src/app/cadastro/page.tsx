"use client";

import BotaoPrimario from "@/components/BotaoPrimario/BotaoPrimario";
import InputCustomizada from "@/components/InputCustomizada/InputCustomizada";
import { SubBotaoPagina } from "@/components/SubBotaoPagina/SubBotaoPagina";

export default function Login() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center p-8">
            <div className="flex flex-row gap">
                <SubBotaoPagina enderecoLink="/login">Login</SubBotaoPagina>
                <SubBotaoPagina enderecoLink="/cadastro">Cadastro</SubBotaoPagina>
            </div>

            <h2 className="text-red text-2xl font-bold md:text-4xl">Registre-se agora!</h2>

            <div className="mt-8 flex flex-col gap-2">
                <InputCustomizada icon="user" textoPlaceholder="Usuário" />
                <InputCustomizada icon="envelope" textoPlaceholder="E-mail" />
                <InputCustomizada icon="lock" textoPlaceholder="Senha" />
                <InputCustomizada icon="key" textoPlaceholder="Confirmar Senha" />
            </div>

            <BotaoPrimario enderecoLink="/">Entrar</BotaoPrimario>
        </div>
    );
}

"use client";

import BotaoPrimario from "@/components/Util/BotaoPrimario/BotaoPrimario";
import InputPrimaria from "@/components/Util/InputPrimaria/InputPrimaria";
import { SubBotao } from "@/components/Util/SubBotao/SubBotao";

export default function Login() {

    return (
        <div className="w-full h-full flex flex-col justify-start items-center p-8">

            <div className="flex flex-row">
                <SubBotao enderecoLink="/login">Login</SubBotao>
                <SubBotao enderecoLink="/cadastro">Cadastro</SubBotao>
            </div>

            <h2 className="text-red text-2xl font-bold md:text-4xl">Bem vindo de volta!</h2>

            <div className="mt-8 flex flex-col">
                <InputPrimaria icon="user" textoPlaceholder="Usuário"></InputPrimaria>
                <InputPrimaria icon="lock" textoPlaceholder="Senha"></InputPrimaria>
            </div>

            <BotaoPrimario enderecoLink="">Entrar</BotaoPrimario>
        </div>
    )
}
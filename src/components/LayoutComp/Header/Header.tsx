"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function NavbarLink(props: { href: string; texto: string; icone: string; setMenuAberto: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { href, texto, icone, setMenuAberto } = props;

    // Verifica se o link é relacionado à área de colaborador
    const isColaborador = href.startsWith("/area-colaborador");

    return (
        <Link
            href={href}
            className={`flex items-center justify-center text-lg bg-gray-700 md:text-base hover:bg-red-700 p-3 px-5 rounded-lg w-full 
                        ${isColaborador ? "md:w-[180px]" : "md:w-auto"} ${isColaborador ? "md:whitespace-nowrap" : ""}`}
            onClick={() => setMenuAberto(false)}
        >
            <i className={`fa-solid ${icone} mr-2 text-base`} />
            {texto}
        </Link>
    );
}

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [isColaborador, setIsColaborador] = useState(false);

    const pathname = usePathname(); // Pegando o path atual

    const toggleMenu = () => setMenuAberto(!menuAberto);

    useEffect(() => {
        // Verifica se o path começa com "/area-colaborador"
        if (pathname && pathname.startsWith("/area-colaborador")) {
            setIsColaborador(true);
        } else {
            setIsColaborador(false);
        }
    }, [pathname]);

    return (
        <header className="bg-black text-white w-full">
            <nav className="px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <section className="flex justify-end p-2">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={160} height={160} />
                    </Link>
                </section>

                {/* Botão do menu mobile/tablet */}
                <button className="md:hidden text-3xl" onClick={toggleMenu}>
                    <i className={`fa-solid ${menuAberto ? "fa-xmark" : "fa-bars"}`} />
                </button>

                {/* Menu Desktop */}
                <div className="hidden md:flex md:items-center gap-4">
                    {/* Esses dois sempre aparecem */}
                    <NavbarLink href="/" texto="Início" icone="fa-home" setMenuAberto={setMenuAberto} />
                    <NavbarLink href="/minha-conta" texto="Conta" icone="fa-user" setMenuAberto={setMenuAberto} />

                    {/* Itens para Área Colaborador */}
                    {isColaborador ? (
                        <>
                            <NavbarLink href="/area-colaborador/registrar-alerta" texto="Registrar Alerta" icone="fa-solid fa-plus" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/gerenciar-alertas" texto="Gerenciar Alertas" icone="fa-list" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/alertas-encerrados" texto="Alertas Encerrados" icone="fa-clock" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/atualizar-status" texto="Atualizar Status" icone="fa-pencil" setMenuAberto={setMenuAberto} />
                        </>
                    ) : (
                        // Itens para Página Cliente (Caso não esteja na área de colaborador)
                        <>
                            <NavbarLink href="/alertas" texto="Alertas" icone="fa-triangle-exclamation" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/status/linhas" texto="Linhas" icone="fa-road" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/status/estacoes" texto="Estações" icone="fa-sign-hanging" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/status/trens" texto="Trens" icone="fa-train" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/suporte/ajuda" texto="Ajuda" icone="fa-headset" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/suporte/aumo" texto="AUMO" icone="fa-robot" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/sobre" texto="Sobre" icone="fa-circle-info" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/gerenciar-alertas" texto="Colaborador" icone="fa-user-lock" setMenuAberto={setMenuAberto} />
                        </>
                    )}
                </div>
            </nav>

            {/* Menu Mobile e Tablet */}
            <nav className={`fixed inset-0 bg-black bg-opacity-90 z-40 transition-transform ${menuAberto ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col justify-start items-center overflow-y-auto h-full w-full p-6`}>
                <button className="text-3xl text-white self-end" onClick={toggleMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <div className="flex flex-col items-center w-full mt-4 space-y-3">
                    {/* Esses dois sempre aparecem */}
                    <NavbarLink href="/" texto="Início" icone="fa-home" setMenuAberto={setMenuAberto} />
                    <NavbarLink href="/minha-conta" texto="Conta" icone="fa-user" setMenuAberto={setMenuAberto} />

                    {isColaborador ? (
                        <>
                            <NavbarLink href="/area-colaborador/registrar-alerta" texto="Registrar Alerta" icone="fa-solid fa-plus" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/gerenciar-alertas" texto="Gerenciar Alertas" icone="fa-list" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/alertas-encerrados" texto="Alertas Encerrados" icone="fa-clock" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/atualizar-status" texto="Atualizar Status" icone="fa-pencil" setMenuAberto={setMenuAberto} />
                        </>
                    ) : (
                        <>
                            <NavbarLink href="/alertas" texto="Alertas" icone="fa-triangle-exclamation" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/status/linhas" texto="Linhas" icone="fa-road" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/status/estacoes" texto="Estações" icone="fa-sign-hanging" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/status/trens" texto="Trens" icone="fa-train" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/suporte/ajuda" texto="Ajuda" icone="fa-headset" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/suporte/aumo" texto="AUMO" icone="fa-robot" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/sobre" texto="Sobre" icone="fa-circle-info" setMenuAberto={setMenuAberto} />
                            <NavbarLink href="/area-colaborador/gerenciar-alertas" texto="Colaborador" icone="fa-user-lock" setMenuAberto={setMenuAberto} />
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

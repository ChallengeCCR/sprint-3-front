"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SubBotao(props: { children: React.ReactNode, enderecoLink: string }) {
    const { children, enderecoLink } = props;
    // Pegando a URL da página atual para decidir onde o underline vai
    const pathname = usePathname();
    return (
        <Link
            href={enderecoLink} className={`mb-4 flex items-center justify-center px-4 text-base ${pathname == enderecoLink ? "underline" : "no-underline"}`}>
            {children}
        </Link>
    );
}

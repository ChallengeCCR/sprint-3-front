import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white flex justify-center p-4">
            <div className="flex gap-6 items-center">
                <Link href={"/"}>
                    <p className="text-sm hover:underline">
                        Challenge CCR - <span className="text-red-700 font-bold">FIAP</span>
                    </p>
                </Link>
                <Link href={"/integrantes"}>
                    <p className="text-sm hover:underline">Integrantes do Grupo</p>
                </Link>
            </div>
        </footer>
    );
}

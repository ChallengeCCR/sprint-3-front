import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-black flex justify-center p-2">
                <h4>
                    <Link href={"/"}>
                        <span className="text-white">Challenge CCR - </span>
                        <span className="text-red-700">FIAP</span>
                    </Link>
                </h4>
            </footer>
        </>
    );
}

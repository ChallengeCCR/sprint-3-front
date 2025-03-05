import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="bg-black flex justify-end p-2">
                <Link href="/">
                    <Image src={"/logo.png"} alt={"Logo"} width={"160"} height={"100"}></Image>
                </Link>
            </header>
        </>
    );
}

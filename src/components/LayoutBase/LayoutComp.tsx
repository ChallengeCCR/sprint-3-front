import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex justify-between">
                {/* Isso faz com que a barra sempre fique por cima*/}
                <div className="fixed left-0 top-0">
                    <Sidebar></Sidebar>
                </div>

                {/* O ml-16 é o que faz o conteúdo não ficar sobreposto*/}
                <div className="flex min-h-screen flex-1 flex-col justify-between">
                    <Header></Header>
                    {/* Alterar o `h-screen para h-full para mudar a posição do footer na tela - Adicionar regra pra fazer isso sozinho` */}
                    <div className="flex min-h-screen w-full flex-col items-center justify-start">
                        {children}
                    </div>{" "}
                    {/* As configurações da página ficam aqui*/}
                    {/* <Footer></Footer> */}
                </div>
            </div>
        </>
    );
}

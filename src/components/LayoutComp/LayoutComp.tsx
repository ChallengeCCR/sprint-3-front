import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function LayoutComp({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">

            {/* Isso faz com que a barra lateral sempre fique por cima*/}
            <div className="fixed left-0 top-0">
                <Sidebar></Sidebar>
            </div>

            {/* Conteúdo principal */}
            <div className="flex min-h-screen flex-1 flex-col justify-between">
                <Header></Header>

                {/* Alterar o `h-screen para h-full para mudar a posição do footer na tela */}
                <div className="flex min-h-screen w-full flex-col items-center justify-start">
                    {children}
                </div>{" "}

                <Footer></Footer>
            </div>
        </div>
    );
}

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function LayoutComp({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex min-h-screen flex-1 flex-col justify-between">
                <Header></Header>
                {/* Conteúdo principal */}
                <div className="flex-1 w-full max-w-screen-xl mx-auto">{children}</div> {/*Ess e w-full faz com que o children ocupe toda a tela deixando o footer em baix */}
                <Footer></Footer>
            </div>
        </div>
    );
}

import TituloPagina from "@/components/TituloPagina/TituloPagina";
import Image from "next/image";

export default function Integrantes() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-6 px-4">
            <TituloPagina iconeTitulo="people-group">Grupo DGM</TituloPagina>

            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-6 mt-8 w-full max-w-3xl justify-center items-center">
                {/* Davi */}
                <CaixaIntegrante nomeIntegrante="Davi" rmIntegrante="560327" fotoIntegrante="/foto_davi.png" githubIntegrante="https://github.com/aldrich-devourer-of-gods" linkedinIntegrante="https://br.linkedin.com/in/davi-malta-58150032a" />

                {/* Marlon */}
                <CaixaIntegrante nomeIntegrante="Marlon" rmIntegrante="560412" fotoIntegrante="/foto_marlon.jpg" githubIntegrante="https://github.com/Maxdlxx" linkedinIntegrante="https://www.linkedin.com/in/marlon-alves-63422a243/" />

                {/* Mateus */}
                <CaixaIntegrante nomeIntegrante="Mateus da Silveira Lima" rmIntegrante="559728" fotoIntegrante="/foto_mateus.png" githubIntegrante="https://github.com/mtslma" linkedinIntegrante="https://www.linkedin.com/in/mtslma" />
            </div>
        </div>
    );
}

export function CaixaIntegrante(props: { fotoIntegrante: string; nomeIntegrante: string; rmIntegrante: string; githubIntegrante: string; linkedinIntegrante: string }) {
    const { fotoIntegrante, nomeIntegrante, rmIntegrante, githubIntegrante, linkedinIntegrante } = props;

    return (
        <div className="w-full sm:w-80 lg:w-96 py-4 px-6 flex flex-col justify-start items-center bg-gray-100 rounded-2xl shadow-md">
            <div className="flex flex-col sm:flex-row items-center">
                <Image className="rounded-full object-cover" src={fotoIntegrante} alt={`Foto do integrante ${nomeIntegrante}`} width={100} height={100} />

                <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0 sm:ml-4">
                    <h2 className="text-lg font-semibold text-gray-800">{nomeIntegrante}</h2>
                    <h3 className="text-md font-bold">
                        <span className="text-red-600">RM</span>: {rmIntegrante}
                    </h3>
                    <div className="flex gap-4 mt-2">
                        <a className="flex justify-center items-center gap-2 text-black" href={githubIntegrante} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github text-xl" />
                            GitHub
                        </a>
                        <a className="flex justify-center items-center gap-2 text-blue-900" href={linkedinIntegrante} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin text-xl" />
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import TituloPagina from "@/components/TituloPagina/TituloPagina";

export default function PaginaSobre() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center py-6 px-4">
            {/* Título da Página */}
            <TituloPagina iconeTitulo="info-circle">Sobre o Autorail Monitor</TituloPagina>

            {/* Descrição do Projeto */}
            <section className="w-full max-w-4xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <h3 className="text-2xl font-semibold text-red-700 mb-4">O que é o Autorail Monitor?</h3>
                <p className="text-gray-700">
                    O <strong>Autorail Monitor</strong> é uma plataforma criada para otimizar o gerenciamento das operações ferroviárias nas linhas 8 e 9 do transporte metropolitano. A plataforma foi projetada para oferecer maior eficiência na operação, permitindo que tanto os operadores quanto os passageiros acompanhem e gerenciem alertas, ocorrências e a situação dos trens em tempo real.
                </p>
            </section>

            {/* Funcionalidades do Projeto */}
            <section className="w-full max-w-4xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Principais Funcionalidades</h3>
                <ul className="text-gray-700 list-disc pl-6">
                    <li>Gestão de alertas e ocorrências em tempo real.</li>
                    <li>Classificação de incidentes por gravidade e tipo.</li>
                    <li>Atualização de status das linhas e estações.</li>
                    <li>Informações acessíveis para passageiros via plataforma e chatbot.</li>
                    <li>Gestão dos usuários e suporte imediato.</li>
                </ul>
            </section>

            {/* Benefícios para os Usuários */}
            <section className="w-full max-w-4xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Benefícios do Sistema</h3>
                <ul className="text-gray-700 list-disc pl-6">
                    <li>Melhora na organização e resposta a incidentes.</li>
                    <li>Transparência no status das operações, aumentando a confiança dos passageiros.</li>
                    <li>Maior agilidade na solução de problemas e redução de custos.</li>
                    <li>Acesso rápido a informações e suporte para todos os usuários.</li>
                </ul>
            </section>

            {/* Conclusão */}
            <section className="w-full max-w-4xl bg-gray-100 p-6 rounded-xl shadow-lg mt-6">
                <p className="text-gray-700">
                    O <strong>Autorail Monitor</strong> visa transformar a gestão ferroviária, proporcionando um ambiente mais organizado e transparente, tanto para os operadores quanto para os passageiros, resultando em um serviço mais eficiente e confiável.
                </p>
            </section>
        </div>
    );
}

import { useState } from "react";

export default function SelectCustomizado(props: { label: string; options: { label: string; value: string }[]; onChange: (valor: string) => void }) {
    const { label, options, onChange } = props;
    const [selecionado, setSelecionado] = useState("");

    const receberMudanca = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = e.target.value;
        setSelecionado(valor);
        onChange(valor);
    };

    return (
        <div className="flex self-center w-full sm:w-[50%] md:lg:w-[300px] lg:w-[300px]">
            <select value={selecionado} onChange={receberMudanca} className="py-3 px-4 w-full border rounded-lg shadow-sm bg-white text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">{label}</option>
                {options.map((opcao, i) => (
                    <option key={i} value={opcao.value}>
                        {opcao.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

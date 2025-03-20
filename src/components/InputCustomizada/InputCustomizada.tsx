export default function InputCustomizada(props: { icon: string; textoPlaceholder: string }) {
    const { icon, textoPlaceholder } = props;

    return (
        <div
            className="flex h-14 w-full max-w-[400px] cursor-text items-center rounded-xl border border-black px-3 shadow-md focus-within:border-red-700 sm:w-[400px]"
            onClick={(e) => {
                const input = e.currentTarget.querySelector("input");
                input?.focus();
            }}
        >
            <i className={`fa-solid fa-${icon} text-gray-700 text-lg`} />
            <input className="ml-3 w-full bg-transparent text-base text-black outline-none placeholder-gray-500" type="text" placeholder={textoPlaceholder} />
        </div>
    );
}

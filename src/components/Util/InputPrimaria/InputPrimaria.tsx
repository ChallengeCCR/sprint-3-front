export default function CustomInput(props: { icon: string, textoPlaceholder: string }) {
    const { icon, textoPlaceholder } = props;
    return (
        <div className="mb-4 flex items-center rounded-xl border-2 border-black px-2 sm:w-[400px]">

            <i className={`fa-solid fa-${icon} text-black text-lg`}></i>

            <input className="h-12 pl-4 outline-none" type="text" placeholder={textoPlaceholder} />
        </div>
    )
}
export default function Key({value, onClick}) {
    return (
        <li className="flex items-center justify-center">
            <button className="text-white bg-orange rounded-full h-16 w-16 uppercase font-medium" onClick={onClick}>
                {value}
            </button>
        </li>
    );
}
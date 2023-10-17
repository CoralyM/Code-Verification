export default function Button({value, onClick, reverse}) {
    return (
        <button className={`border-2 border-orange rounded-full uppercase font-bold py-4 lg:w-1/4 w-full ${reverse ? `bg-orange text-white` : `bg-white text-orange`}`} onClick={onClick}>
            {value}
        </button>
    );
}   
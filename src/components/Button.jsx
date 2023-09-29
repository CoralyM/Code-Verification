export default function Button({value, onClick, reverse}) {
    return (
        <button className={`border-2 border-[#eb651c] rounded-full uppercase font-bold py-4 lg:w-1/4 w-full ${reverse ? `bg-[#eb651c] text-white` : `bg-white text-[#eb651c]`}`} onClick={onClick}>
            {value}
        </button>
    );
}   
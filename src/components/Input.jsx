export default function Input({value}) {
    return (
        <input type="text"
               className="h-24 w-full bg-white rounded-4xl text-[#eb651c] font-bold text-5xl uppercase px-12 outline-none"
               value={value}
               readOnly
        />
    );
}
export default function Layout({children}) {
    return (
        <section className="bg-almost-white w-screen lg:h-screen flex flex-col justify-center items-center lg:py-0 py-10">
            <div className="max-w-screen-md w-full flex flex-col gap-y-14">
                {children}
            </div>
        </section>
    );
}
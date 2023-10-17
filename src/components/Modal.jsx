import { createPortal } from "react-dom";
import Check from '../assets/img/check.svg';
import Button from "./Button";

export default function Modal({showModal, closeModal, text}) {
    return (
        <>
            {showModal ? createPortal(
                <ModalContent text={text} closeModal={closeModal} />,
                document.body
            ) : <></>}
        </>
    );
}

function ModalContent({text, closeModal}) {
    return (
        <section className="lg:absolute fixed top-0 h-screen w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center lg:px-0 px-5">
            <div className="bg-white lg:w-2/5 w-full py-8 rounded-2xl flex flex-col items-center justify-center gap-10 lg:px-0 px-5">
                <div className="rounded-full bg-orange w-16 h-16 flex items-center justify-center">
                    <img src={Check} className="w-8 h-8"/>
                </div>
                <p className="font-bold text-black text-lg uppercase max-w-sm text-center leading-6">{text}</p>
                <Button onClick={closeModal} reverse value={'Fermer'}/>
            </div>
        </section>
    )
}
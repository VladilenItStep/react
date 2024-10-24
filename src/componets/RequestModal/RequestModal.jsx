import { useState } from "react"
import Button from "../Button/Button"
import Modal from "../Modal/Modal"

function RequestModal() {
    const [isOpenModal, setIsOpenModal] = useState(false)


    const handleOnOpenModal = (e) => {
        setIsOpenModal(true)
    }

    const handleOnCloseModal = (e) => {
        setIsOpenModal(false)
    }

    return <>
        {isOpenModal && <Modal isOpen={isOpenModal} onClose={handleOnCloseModal} />}
        <Button title='Открыть модальное окно' onClick={handleOnOpenModal} />
    </>

}

export default RequestModal
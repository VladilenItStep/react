import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './style.css'

function Modal(params) {
    const { title, isOpen, onClose } = params
    const [user, setUser] = useState({})
    const [userOrder, setUserOrder] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/${userOrder}`)
            .then(response => response.json())
            .then(userData => {
                console.log(userData)
                setUser({ name: userData.name, city: userData.address.city })
                setIsLoading(false)
            })
            .catch(e => {
                setIsLoading(false)
            })

        return () => {
            console.log('component will unmount')
        }

    }, [userOrder])



    console.log(user);
    console.log('userOrder', userOrder);

    console.log('Modal render');

    return <div className='modal'>

        <div className='modal-content'>
            <h3>{title || 'Modal'}</h3>
            <br />
            {isLoading
                ? <p>Loading...</p>
                : (<div>
                    <p>Name: {user.name}</p>
                    <p>Sity: {user.city}</p>
                </div>)
            }

            <br />
            <Button title='Запросить следующие данные' onClick={() => setUserOrder(prevState => prevState + 1)} />
            <Button title='Запросить предыдущие данные'
                onClick={() => userOrder !== 1 && setUserOrder(prevState => prevState - 1)}
            // onClick={() => {
            //     if (userOrder !== 1) {
            //         setUserOrder(prevState => prevState - 1)
            //     }
            // }}

            />

            <Button title='Закрыть' onClick={onClose} />
        </div>

    </div>


}


export default Modal
import { useContext } from 'react'
import MyContext from '../../context/textContext'
import Button from '../Button/Button'
import './style.css'


export function ListItem(params) {
    const { label, id } = params

    const { handleRemoveItem } = useContext(MyContext)

    return <li className="todo-list__item">
        <div className="todo-list__item-wrapper">
            <p className="todo-list__item-title">{label}</p>
            <Button title='Remove' onClick={() => handleRemoveItem(id)} />
        </div>
    </li>
}
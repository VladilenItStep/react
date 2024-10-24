import { useContext } from 'react'
import MyContext from '../../context/textContext'
import Button from '../Button/Button'
import { Input } from '../Input/Input'
import './style.css'



export function AddItemSection(props) {

    const { handleAddItem, label, handleInput } = useContext(MyContext)

    return <div className="todo-control-block">
        <Input onChange={handleInput} label={label} />
        <Button title='Add' onClick={handleAddItem} />
    </div>


}
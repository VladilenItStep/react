import { createContext, useContext, useState } from 'react'
import Button from './componets/Button/Button'
import Modal from './componets/Modal/Modal'
import RequestModal from './componets/RequestModal/RequestModal'
import TodoList from './componets/TodoList/TodoList'
import MyContext from './context/textContext'
import './globalStyle.css'


console.log(MyContext);



const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [label, setLabel] = useState('')

    const handleAddItem = () => {
        setTodos((prevState) => [{ title: label, id: new Date().getTime() }, ...prevState])
        setLabel('')
        console.log(todos);
    }

    const handleInput = (event) => {
        setLabel(event.target.value)
    }

    const handleRemoveItem = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const consumer = {
        todos,
        label,
        handleAddItem,
        handleInput,
        handleRemoveItem
    }

    return <MyContext.Provider value={consumer}>
        {children}
    </MyContext.Provider>



}


const TempContext = createContext()

const Component3 = () => {

    const value = useContext(TempContext)

    return <p>....{value}</p>
}

const Component2 = () => {

    return <Component3 />
}


const Component1 = () => {

    return <Component2 />
}


function App() {
    const [temp] = useState('hello react useState')


    return <>
        {/* <TodoProvider>
            <TodoList />
        </TodoProvider> */}
        <TempContext.Provider value='sime value'>
            <Component1 />
        </TempContext.Provider>


    </>

}


export default App



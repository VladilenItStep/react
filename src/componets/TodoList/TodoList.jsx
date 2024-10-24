import { createContext, useContext, useState } from 'react'
import MyContext from '../../context/textContext'
import { AddItemSection } from '../AddItemSection/AddItemSection'
import { ListItem } from '../ListItem/ListItem'





function TodoList() {
    const { todos } = useContext(MyContext)

    const list = todos.length ? todos.map((item, index) =>
        <ListItem key={item.id} label={item.title} id={item.id} />) : 'Элементов нет'


    return <main className="todo">
        <AddItemSection />
        {list}
    </main>

}


export default TodoList

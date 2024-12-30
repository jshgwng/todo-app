'use client'
import {useEffect, useState} from "react";

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })
    const [input, setInput] = useState('')
    const [category, setCategory] = useState('')
    const [filter, setFilter] = useState('all')
    const [categoryInput, setCategoryInput] = useState('')
    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem('categories')
        return savedCategories ? JSON.parse(savedCategories) : []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        localStorage.setItem('categories', JSON.stringify(categories))
    }, [todos, categories]);
    const addTodo = (e) => {
        if (!input.trim()) {
            alert("Please enter something")
        } else {
            e.preventDefault()
            setTodos([...todos, {id: Date.now(), text: input, category: category || 'Uncategorized', completed: false}])
            setInput('')
        }
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addCategory = (e) => {
        e.preventDefault()
        if (!categoryInput.trim() || categories.includes(categoryInput)) {
            alert("Please enter something/category already exists")
        } else {
            setCategories([...categories, categoryInput])
            setCategoryInput('')
        }
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.completed
        }
        if (filter === 'completed') {
            return todo.completed
        }
        return true
    })

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">Todo App</h1>
                <form onSubmit={addCategory} className="mb-4">
                    <div className="flex gap-2 mb-2">
                        <input type="text" value={categoryInput} onChange={e => setCategoryInput(e.target.value)}
                               className="flex-grow px-3 py-2 border rounded-lg"/>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Add</button>
                    </div>
                </form>
                <form onSubmit={addTodo} className="flex gap-2 mb-4">
                    <input
                        type="text"
                        value={input} onChange={e => setInput(e.target.value)}
                        className="flex-grow px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <select value={category} onChange={e => setCategory(e.target.value)} id=""
                            className="px-3 py-2 border rounded-lg">
                        <option value="">Category</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Add
                    </button>
                </form>
                <div className="flex gap-2 mb-4">
                    <button
                        onClick={() => setFilter('active')}
                        className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        Active
                    </button>
                    <button
                        onClick={() => setFilter('completed')}
                        className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                        Completed
                    </button>
                </div>
                <ul className="space-y-2">
                    {
                        filteredTodos.map(todo => (
                            <li key={todo.id} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}
                                       className="w-5 h-5 text-blue-500"/>
                                <span
                                    className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
                                <span
                                className='px-2 py-1 text-sm bg-gray-200 rounded'>{todo.category}</span>
                                <button className="px-3 py-1 text-sm text-red-500 hover:bg-red-50 rounded"
                                        onClick={deleteTodo}>Delete
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
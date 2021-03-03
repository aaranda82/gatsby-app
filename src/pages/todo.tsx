import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Sub = styled.div`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const TodoItem = styled.div`
  width: 100%;
  text-align: center;
  margin: 5px;
`

const todoStyles = {
  cursor: 'pointer',
  border: 'none',
  backgroundColor: 'lightblue',
  width: '200px',
  fontSize: '20px',
}
const completedTodoStyles = {
  fontSize: '20px',
  width: '200px',
  cursor: 'pointer',
  textDecoration: 'line-through',
  border: 'none',
  backgroundColor: 'lightblue',
}
const iconStyles = {
  paddingLeft: '10px',
}

interface ITodo {
  todo: string
  completed: boolean
}

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [newTodo, setNewTodo] = useState<string>('')
  const input = React.createRef<HTMLInputElement>()

  useEffect(() => {
    input.current?.focus()
  }, [input])

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        todo: newTodo,
        completed: false,
      },
    ])
    setNewTodo('')
  }

  const toggelTodo = (index: number) => {
    const todoCopy = [...todos]
    todoCopy[index].completed = !todos[index].completed
    setTodos(todoCopy)
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((t, i) => i !== index))
  }

  const renderTodos = () => {
    return todos.map((t, index) => (
      <TodoItem key={index}>
        <button
          style={t.completed ? completedTodoStyles : todoStyles}
          onClick={() => toggelTodo(index)}
          onKeyDown={() => toggelTodo(index)}
        >
          {t.todo}
        </button>
        <button
          style={iconStyles}
          onClick={() => deleteTodo(index)}
          onKeyDown={() => deleteTodo(index)}
        >
          X
        </button>
      </TodoItem>
    ))
  }

  return (
    <Layout>
      <Container>
        <h1>TODOS</h1>
        <Sub>
          <input
            ref={input}
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button onClick={() => addTodo()} disabled={!newTodo}>
            Add Todo
          </button>
        </Sub>
        <Sub>{renderTodos()}</Sub>
      </Container>
    </Layout>
  )
}

export default Todo

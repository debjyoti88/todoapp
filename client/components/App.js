import React from 'react'
import Footer from './Footer'
import Count from './Count'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ShowCount from '../containers/ShowCount'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ShowCount />
  </div>
)

export default App

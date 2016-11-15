import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, onDeleteClick }) => (
  <div>
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text+"\t"}
    <input type="button" value="DEL" onClick={onDeleteClick} />
  </li>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
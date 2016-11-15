import { connect } from 'react-redux'
import Count from '../components/Count'

const getCount = (todos) => todos.filter(t => !t.completed).length

const mapStateToProps = (state) => {
    return {
        count: getCount(state.todos)
    }
}

const ShowCount = connect(mapStateToProps)(Count)

export default ShowCount

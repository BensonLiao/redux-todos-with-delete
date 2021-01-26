import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import Todo from '../components/Todo'

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(
  null,
  mapDispatchToProps
)(Todo)

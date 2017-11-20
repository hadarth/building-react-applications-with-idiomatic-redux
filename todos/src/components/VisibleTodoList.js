import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { withRouter } from 'react-router-dom';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'active':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}.`);
  }
};

const mapStateToProps = (state, { match: { params: { filter } } }) => {
  console.log('filter: ', filter);
  return {
    todos: getVisibleTodos(state.todos, filter || 'all'),
  }
}


const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
